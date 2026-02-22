"use client";

import { useState } from "react";
import styles from './page.module.css';
import FeedbackModal from '../components/FeedbackModal';

export default function Contact() {
  // 表单字段状态
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // 弹窗状态
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止页面刷新

    // 1. 校验：确保所有字段都不为空
    if (!formData.name || !formData.email || !formData.message) {
      setModalConfig({
        type: "error",
        title: "Missing Information",
        message: "Please fill in all fields before sending your message."
      });
      setIsModalOpen(true);
      return;
    }

    // 2. 模拟提交逻辑
    console.log("Form Submitted:", formData);
    
    // 3. 显示成功弹窗
    setModalConfig({
      type: "success",
      title: "Message Sent!",
      message: "We've received your message and will get back to you at " + formData.email + " soon."
    });
    setIsModalOpen(true);

    // 4. 成功后重置表单
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* 左侧信息栏保持不变... */}
        <div className={styles.infoSection}>
          <h1>Get in <span className={styles.highlight}>Touch</span></h1>
          <p>Drop us a message and we'll get back to you as soon as possible.</p>
          <div className={styles.contactDetail}>
            <span className={styles.label}>Email Us</span>
            <span className={styles.value}>hello@example.com</span>
          </div>
        </div>

        {/* 右侧表单卡片 */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Your name" 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input 
                type="email" 
                name="email"
                placeholder="email@example.com" 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea 
                name="message"
                rows="4" 
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* 复用 FeedbackModal 组件 */}
      <FeedbackModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
      />
    </div>
  );
}