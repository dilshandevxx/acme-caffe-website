import styles from './ColoursSection.module.css';

const colours = [
  { name: 'Red', hex: '#b32c32' },
  { name: 'Pink', hex: '#eedae0' },
  { name: 'Black', hex: '#2c2c2c' },
  { name: 'White', hex: '#f4f4f4' },
  { name: 'Grey', hex: '#6d7c86' },
  { name: 'Brown', hex: '#8b4a32' },
  { name: 'Mint', hex: '#87c6b3' },
  { name: 'Orange', hex: '#d96c42' },
  { name: 'Cream', hex: '#e8dec9' },
  { name: 'Green', hex: '#008a50' }
];

export default function ColoursSection() {
  return (
    <section className={styles.coloursSection}>
      <div className={styles.header}>
        <h2 className="brand-font">COLOURS <sup>[12]</sup></h2>
        <p>Acme may be most known as the home of iconic colours that adorn espresso machines and cafe tables globally.</p>
      </div>
      
      <div className={styles.swatchesContainer}>
        {colours.map((color, index) => (
          <div key={index} className={styles.swatchItem}>
            <span className={styles.colorName}>{color.name}</span>
            <div className={styles.colorCircle} style={{ backgroundColor: color.hex }}></div>
          </div>
        ))}
      </div>

      <div className={styles.colorDetail}>
        <h3>Feijoa</h3>
        <p>Feijoa tree is a common feature in New Zealand backyards, and come March they are abundant in this green fruit. It&apos;s kind of a custom to gift and trade the fruit with friends and neighbours, which we think is just awesome.</p>
        <button className={styles.shopBtn}>SHOP COLOUR &rarr;</button>
      </div>
    </section>
  );
}
