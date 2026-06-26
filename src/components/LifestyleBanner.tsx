import Image from 'next/image';
import styles from './LifestyleBanner.module.css';

export default function LifestyleBanner() {
  return (
    <section className={styles.bannerSection}>
      <Image src="/lifestyle-pour.png" alt="Pouring espresso" fill className={styles.bgImage} />
      
      <div className={styles.overlayContent}>
        <h2>Made of porcelain.<br/>By coffee professionals, for mixing and matching, for stacking.</h2>
        <button className={styles.shopBtn}>SHOP ALL CUPS &rarr;</button>
      </div>
    </section>
  );
}
