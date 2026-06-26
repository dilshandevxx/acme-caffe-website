import Image from 'next/image';
import styles from './InstagramFeed.module.css';

const images = [
  '/roman-cup.png',
  '/tajimi-tumbler.png',
  '/lifestyle-pour.png',
  '/journal-image.png',
  '/tajimi-cherry.png',
  '/classic-cake.png',
  '/roman-saucer.png',
  '/roman-cup.png',
];

export default function InstagramFeed() {
  return (
    <section className={styles.instagramSection}>
      <div className={styles.header}>
        <h2 className="brand-font">INSTAGRAM <sup>®</sup></h2>
      </div>
      
      <div className={styles.feed}>
        {images.map((img, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image src={img} alt={`Instagram post ${index}`} fill className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
}
