"use client";

import styles from './page.module.css';
import FAQItem from '../components/FAQItem';
import FeedbackModal from '../components/FeedbackModal';
import { useState } from 'react';

const faqs = [
  {
    question: "How can I start with GreenSpace?",
    answer: "Getting started is easy! Just sign up for a free account and explore our intuitive dashboard designed for clarity."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, we provide both iOS and Android versions so you can stay connected with your projects on the go."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. We believe in freedom, so you can pause or cancel your plan at any moment with no hidden fees."
  }
];

export default function FAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState("");

  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: ""
  });

  const handleSubmit = () => {
    if (question.trim() === "") {
      // --- 情况 A: 输入为空 ---
      setModalConfig({
        type: "error",
        title: "Empty Input",
        message: "Please enter your question before submitting."
      });
      setIsModalOpen(true);
      return;
    }

    // --- 情况 B: 提交成功 ---
    console.log("Submitted:", question);
    setModalConfig({
      type: "success",
      title: "Submission Successful!",
      message: "Thank you for your question. We'll get back to you shortly."
    });
    setIsModalOpen(true);
    setQuestion("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Header */}
        <header className={styles.header}>
          <h1>Common <span className={styles.highlight}>Questions</span></h1>
          <p style={{color: '#666', marginTop: '10px'}}>Everything you need to know about our platform.</p>
        </header>

        {/* FAQ List - 使用 FAQItem 组件 */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

        {/* Question Submission Section */}
        <section className={styles.submitSection}>
        <div className={styles.inputGroup}>
          <input 
            type="text" 
            placeholder="Ask your question here..." 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button className={styles.submitBtn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </section>

      {/* FeedbackModal */}
      <FeedbackModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
      />
    </div>
  </div>
  );
}