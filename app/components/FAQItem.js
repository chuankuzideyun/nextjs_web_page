"use client";

import { useState } from "react";
import styles from "../faq/page.module.css"; 

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}>
      <button 
        className={styles.questionButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.questionText}>{question}</span>
        {/* 右侧的小箭头图标 */}
        <span className={`${styles.icon} ${isOpen ? styles.iconRotate : ""}`}>
          ▼
        </span>
      </button>
      
      {/* 带有平滑过渡效果的答案区 */}
      <div className={`${styles.answerWrapper} ${isOpen ? styles.show : ""}`}>
        <div className={styles.answerContent}>
          {answer}
        </div>
      </div>
    </div>
  );
}