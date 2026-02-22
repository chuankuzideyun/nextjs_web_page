import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Left Side: Text Info */}
        <div className={styles.infoSection}>
          <h1>Get in <span className={styles.highlight}>Touch</span></h1>
          <p>
            Have a question or just want to say hello? Drop us a message and 
            we'll get back to you as soon as possible.
          </p>
          
          <div className={styles.contactDetail}>
            <span className={styles.label}>Email Us</span>
            <span className={styles.value}>hello@example.com</span>
          </div>
          
          <div className={styles.contactDetail}>
            <span className={styles.label}>Office</span>
            <span className={styles.value}>Green Valley St. 123, Earth</span>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className={styles.formCard}>
          <form>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="email@example.com" />
            </div>
            
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea rows="4" placeholder="How can we help?"></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}