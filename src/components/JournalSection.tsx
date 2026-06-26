import Image from 'next/image';
import styles from './JournalSection.module.css';

export default function JournalSection() {
  return (
    <section className={styles.journalSection}>
      <div className={styles.titleContainer}>
        <h2 className="brand-font">JOURNAL</h2>
      </div>
      
      <div className={styles.articleInfo}>
        <span className={styles.meta}>ACME / SECOND CHANCE</span>
        <h3>Turning imperfection into impact</h3>
        <button className={styles.readBtn}>READ JOURNAL &rarr;</button>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image src="/journal-image.png" alt="Journal article" fill className={styles.image} />
        </div>
      </div>
    </section>
  );
}
