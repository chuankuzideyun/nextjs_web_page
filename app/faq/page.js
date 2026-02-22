import styles from './page.module.css';
import FAQItem from '../components/FAQItem';

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
          <h2>Didn't find your answer?</h2>
          <p style={{color: '#666'}}>Type your question below and our team will get back to you.</p>
          
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Ask your question here..." />
            <button className={styles.submitBtn}>Submit</button>
          </div>
        </section>

      </div>
    </div>
  );
}