"use client";

import styles from "./feedbackModal.module.css";

export default function FeedbackModal({ isOpen, onClose, type = "success", title, message }) {
  if (!isOpen) return null;

  // 根据类型决定颜色和图标
  const isError = type === "error";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* 根据类型显示不同颜色的图标 */}
        <div className={`${styles.iconCircle} ${isError ? styles.errorIcon : ""}`}>
          {isError ? "!" : "✓"}
        </div>
        
        <h2>{title}</h2>
        <p>{message}</p>
        
        <button 
          className={`${styles.closeBtn} ${isError ? styles.errorBtn : ""}`} 
          onClick={onClose}
        >
          {isError ? "Try Again" : "Got it"}
        </button>
      </div>
    </div>
  );
}