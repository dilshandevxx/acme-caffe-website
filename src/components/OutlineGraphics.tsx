import styles from './OutlineGraphics.module.css';

export default function OutlineGraphics() {
  return (
    <section className={styles.graphicsSection}>
      <div className={styles.svgContainer}>
        {/* Cup Outline */}
        <svg viewBox="0 0 100 100" className={styles.icon}>
          <path d="M20,30 L80,30 C80,30 80,70 50,70 C20,70 20,30 20,30 Z" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M80,40 C90,40 90,60 80,60" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>

        {/* Plate Outline */}
        <svg viewBox="0 0 100 100" className={styles.iconLarge}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#000" strokeWidth="2"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>

        {/* Cutlery Outline */}
        <svg viewBox="0 0 100 100" className={styles.icon}>
          <path d="M40,20 L40,50 L45,90 L35,90 L40,50" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M35,20 L35,40" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M45,20 L45,40" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M60,20 C70,20 70,50 60,90 L55,90 C65,50 65,20 60,20 Z" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  );
}
