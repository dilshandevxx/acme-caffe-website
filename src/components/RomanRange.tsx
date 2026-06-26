import Image from 'next/image';
import styles from './RomanRange.module.css';

const products = [
  { name: 'ROMAN CUP MINI', description: 'Kawakawa\n110ml', price: '$24.70', image: '/roman-cup.png' },
  { name: 'ROMAN CUP SMALL', description: 'Kawakawa\n150ml', price: '$26.20', image: '/roman-cup.png' },
  { name: 'ROMAN CUP MEDIUM', description: 'Kawakawa\n250ml', price: '$28.00', image: '/roman-cup.png' },
  { name: 'ROMAN SAUCER MEDIUM', description: 'Kawakawa\n15cm', price: '$12.50', image: '/roman-saucer.png' }
];

export default function RomanRange() {
  return (
    <section className={styles.romanSection}>
      <div className={styles.header}>
        <h2 className="brand-font">ROMAN RANGE <sup>[15]</sup></h2>
        <div className={styles.headerRight}>
          <button className={styles.shopBtn}>SHOP COLLECTION &rarr;</button>
        </div>
      </div>
      
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className={styles.imageContainer}>
              <Image src={product.image} alt={product.name} width={200} height={200} className={styles.productImage} />
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.addToCart}>ADD TO CART</span>
              <span className={styles.price}>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
