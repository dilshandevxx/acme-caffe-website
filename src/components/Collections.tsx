import Image from 'next/image';
import styles from './Collections.module.css';

const products = [
  { size: 'MINI', name: 'Kawakawa', image: '/roman-cup.png' },
  { size: 'SMALL', name: 'Kawakawa', image: '/roman-cup.png' },
  { size: 'MEDIUM', name: 'Kawakawa', image: '/roman-cup.png' },
  { size: 'MINI', name: 'Milk', image: '/tajimi-tumbler.png' },
  { size: 'SMALL', name: 'Milk', image: '/tajimi-tumbler.png' },
  { size: 'MEDIUM', name: 'Milk', image: '/tajimi-tumbler.png' },
  { size: 'SAUCER', name: 'Kawakawa', image: '/roman-saucer.png' },
  { size: 'SAUCER', name: 'Kawakawa', image: '/roman-saucer.png' },
];

export default function Collections() {
  return (
    <section className={styles.collectionsSection}>
      <aside className={styles.sidebar}>
        <ul className="brand-font">
          <li className={styles.active}>ROMAN <sup>[10]</sup></li>
          <li>UNION</li>
          <li>BIBBY</li>
          <li>BOBBY</li>
        </ul>
      </aside>
      
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h3>Created for modern drinkers</h3>
            <p>The Roman Range is our first lighter style created for the modern lighter tasting espresso. But of espresso tastes brilliant in these cups, trust us, we&apos;re professionals.</p>
            <button className={styles.shopBtn}>SHOP ALL RANGE &rarr;</button>
          </div>
          <div className={styles.details}>
            <p>Material</p>
            <p>Porcelain, 110-250ml</p>
            <p>Dishwasher, Filter</p>
          </div>
        </div>

        <h4 className={styles.collectionTitle}>Roman collection</h4>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.size}>{product.size}</span>
                <span className={styles.name}>{product.name}</span>
              </div>
              <div className={styles.imageContainer}>
                <Image src={product.image} alt={product.name} width={100} height={100} className={styles.productImage} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
