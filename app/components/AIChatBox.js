"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./aiChatBox.module.css";
import { useAuth } from "../context/AuthContext";
import { getOrCreateChat, saveMessage } from "../lib/chatService";

export default function AIChatBox() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I'm your GreenSpace assistant. How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // 自动滚动到底部
  useEffect(() => {
    if (user) {
      const loadHistory = async () => {
        const history = await getOrCreateChat(user.uid);
        setMessages(history);
      };
      loadHistory();
    } else {
      setMessages([{ role: "ai", text: "Please sign in to save your chat history!" }]);
    }
  }, [user]);

  const handleSend = async () => {
    if (!input.trim() || !user) return;

    const userMsg = { role: "user", text: input, timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    await saveMessage(user.uid, userMsg);
    
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }]
          })
        }
      );

      //const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      const aiMsg = { role: "ai", text: aiText, timestamp: new Date().toISOString() };
      
      setMessages(prev => [...prev, aiMsg]);
      await saveMessage(user.uid, aiMsg);
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", text: "Sorry, I'm having trouble connecting to the brain. Please try again later!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.aiWrapper}>
      <button className={styles.floatingBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "🤖"}
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>GreenSpace AI</div>
          <div className={styles.messageArea} ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.bubble} ${msg.role === 'user' ? styles.userBubble : styles.aiBubble}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className={styles.aiBubble}>Thinking...</div>}
          </div>
          <div className={styles.inputArea}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}