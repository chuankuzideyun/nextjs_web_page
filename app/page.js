import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* 图片区域：增加一张更符合主题的插图 */}
        <div className={styles.heroImageWrapper}>
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
            alt="Workspace with plants"
            width={500}
            height={300}
            className={styles.heroImage}
            style={{ borderRadius: '32px', objectFit: 'cover' }}
            priority
          />
        </div>

        {/* 欢迎文字区域 */}
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>GreenSpace</span>
          </h1>
          <p className={styles.subtitle}>
            Your calm and sustainable digital hub. We provide the tools you 
            need to grow your projects while staying connected to nature.
          </p>
        </div>

        {/* 按钮区域 */}
        <div className={styles.ctas}>
          <Link href="/about" className={styles.primary}>
            Learn More
          </Link>
          <Link href="/contact" className={styles.secondary}>
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}