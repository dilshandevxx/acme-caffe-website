import Image from 'next/image';
import styles from './ClassicAcme.module.css';

export default function ClassicAcme() {
  return (
    <section className={styles.classicSection}>
      <Image src="/classic-cake.png" alt="Classic Acme" fill className={styles.bgImage} />
      
      <div className={styles.cardOverlay}>
        <div className={styles.cardHeader}>
          <h3>Classic Acme</h3>
          <span>[11]</span>
        </div>
        <p>
          Designed by coffee professionals for everyone. Created to sit in the background, elevating your work. Functional porcelain. Love a bit of functionality.
        </p>
        <button className={styles.shopBtn}>SHOP NEW PRODUCTS &rarr;</button>
      </div>
    </section>
  );
}
