import Image from 'next/image';
import styles from './HeroSection.module.css';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <Navbar />
      
      <div className={styles.imageWrapper}>
        <Image 
          src="/hero-image.png" 
          alt="People at ACME Cafe" 
          fill 
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={`${styles.brandName} brand-font ${styles.animateFadeUp}`}>ACME</h1>
        
        <div className={`${styles.heroCard} ${styles.animateFadeLeft}`}>
          <div className={styles.glassContainer}>
            <h2>Meet the new Tall and<br/>Short tumblers</h2>
            <button className={styles.exploreBtn}>EXPLORE MORE &rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
}
