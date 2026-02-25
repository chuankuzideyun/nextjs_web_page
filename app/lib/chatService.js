// lib/chatService.js
import { db } from "./firebase";
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  serverTimestamp 
} from "firebase/firestore";

// 获取或创建用户的聊天记录文档
export const getOrCreateChat = async (userId) => {
  const docRef = doc(db, "chats", userId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const initialData = {
      userId: userId,
      messages: [{ role: "ai", text: "Hello! I'm your saved assistant. How can I help?" }],
      updatedAt: serverTimestamp()
    };
    await setDoc(docRef, initialData);
    return initialData.messages;
  }
  
  return docSnap.data().messages;
};

// 将新消息推送到 Firestore
export const saveMessage = async (userId, message) => {
  const docRef = doc(db, "chats", userId);
  await updateDoc(docRef, {
    messages: arrayUnion(message),
    updatedAt: serverTimestamp()
  });
};