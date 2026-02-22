import styles from './page.module.css'; 
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.accentLine}></div>
        
        <header>
          <h1 className={styles.title}>
            About <span className={styles.highlight}>Us</span>
          </h1>
          <p className={styles.description}>
            We are a collective of thinkers and makers dedicated to building 
            digital experiences that feel natural and powerful.
          </p>
        </header>

        <main className={styles.grid}>
          <div className={`${styles.card} ${styles.whiteCard}`}>
            <h3>Our Vision</h3>
            <p>To harmonize modern technology with human-centric design.</p>
          </div>

          <div className={`${styles.card} ${styles.greenCard}`}>
            <h3>Get in Touch</h3>
            <p>Let's create something beautiful together.</p>
            <button className={styles.button}>
                <Link href="/contact" className={styles.button}>
                    Contact Us
                </Link>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}