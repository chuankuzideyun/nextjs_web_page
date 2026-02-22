import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo 部分 */}
        <Link href="/" className={styles.logo}>
          Green<span style={{color: '#333'}}>Space</span>
        </Link>

        {/* 导航链接 */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/faq" className={styles.link}>FAQ</Link>
          <Link href="/contact" className={`${styles.link} styles.contactBtn`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}