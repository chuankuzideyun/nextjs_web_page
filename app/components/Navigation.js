"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export default function Navigation() {
  const pathname = usePathname(); 

  const isActive = (path) => pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Green<span style={{color: '#333'}}>Space</span>
        </Link>

        <div className={styles.navLinks}>
          {/* 首页 */}
          <Link 
            href="/" 
            className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
          >
            Home
          </Link>

          {/* About 页 */}
          <Link 
            href="/about" 
            className={`${styles.link} ${isActive("/about") ? styles.active : ""}`}
          >
            About
          </Link>

          {/* FAQ 页 */}
          <Link 
            href="/faq" 
            className={`${styles.link} ${isActive("/faq") ? styles.active : ""}`}
          >
            FAQ
          </Link>

          {/* Contact 按钮（保持其特殊样式，但也增加激活判断） */}
          <Link 
            href="/contact" 
            className={`${styles.link} ${styles.contactBtn} ${isActive("/contact") ? styles.activeBtn : ""}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}