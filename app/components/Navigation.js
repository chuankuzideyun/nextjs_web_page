"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import styles from "./navigation.module.css";
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname(); 

  const isActive = (path) => pathname === path;
  const { user, loginWithGoogle, logout } = useAuth();

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
        <div className={styles.authSection}>
          {user ? (
            <div className={styles.userInfo}>
              <Image 
                src={user.photoURL || "/default-avatar.png"} 
                alt="user avatar" 
                width={32}           
                height={32}          
                className={styles.avatar} 
                unoptimized={true}   
              />
              <button onClick={logout} className={styles.logoutBtn}>Logout</button>
            </div>
          ) : (
            <button onClick={loginWithGoogle} className={styles.loginBtn}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}