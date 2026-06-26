import styles from './ImpactText.module.css';

export default function ImpactText() {
  return (
    <section className={styles.impactSection}>
      <div className={styles.leftContent}>
        <h2>
          Born from a long-standing ambition to create products that seamlessly blend form and function.
        </h2>
      </div>
      <div className={styles.rightContent}>
        <p>
          Over a decade ago, we noticed the cafe industry was in need of a well-designed espresso cup, designed by those who use them daily.
        </p>
        <p>
          Our approach is straightforward: design functional, durable, and elegant products for everyday use.
        </p>
      </div>
    </section>
  );
}
