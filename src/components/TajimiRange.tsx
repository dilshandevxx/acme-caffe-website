import Image from 'next/image';
import styles from './TajimiRange.module.css';

export default function TajimiRange() {
  return (
    <section className={styles.tajimiSection}>
      <div className={styles.header}>
        <h2 className="brand-font">TAJIMI <sup>[8]</sup></h2>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <p>
            Meet our newest additions to our Tajimi collection, Tall and Short. Designed to keep your cool drinks cool while also making you feel just that little bit fancier.
          </p>
          <button className={styles.shopBtn}>SHOP COLLECTION &rarr;</button>
        </div>
        
        <div className={styles.centerCol}>
          <div className={styles.cardHeader}>
            <h3>TAJIMI SHORT TUMBLER</h3>
            <p>200ml</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/tajimi-tumbler.png" alt="Tajimi Short Tumbler" width={250} height={250} className={styles.productImage} />
          </div>
          <div className={styles.thumbnails}>
             <div className={`${styles.thumb} ${styles.thumbActive}`} style={{backgroundColor: '#fff', border: '1px solid #ccc'}}></div>
             <div className={styles.thumb} style={{backgroundColor: '#1a1a1a'}}></div>
             <div className={styles.thumb} style={{backgroundColor: '#3b5a45'}}></div>
             <div className={styles.thumb} style={{backgroundColor: '#e6a88b'}}></div>
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.addToCart}>ADD TO CART</span>
            <span className={styles.price}>$34.00</span>
          </div>
        </div>
        
        <div className={styles.rightCol}>
          <Image src="/tajimi-cherry.png" alt="Lifestyle" fill className={styles.lifestyleImage} />
        </div>
      </div>
    </section>
  );
}
