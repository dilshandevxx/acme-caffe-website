import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <p className={styles.newsletterText}>Enter your email for the latest updates about our newest product launches, member discounts, and more!</p>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="First Name" />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Email Address" />
            <button className={styles.submitBtn}>&rarr;</button>
          </div>
          <div className={styles.socials}>
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">YT</a>
          </div>
        </div>
        
        <div className={styles.linksContainer}>
          <div className={styles.linkColumn}>
            <h4>SHOP</h4>
            <a href="#">Roman</a>
            <a href="#">Classic</a>
            <a href="#">Cutlery</a>
            <a href="#">Plates & Bowls</a>
          </div>
          <div className={styles.linkColumn}>
            <h4>LINK</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Journal</a>
            <a href="#">FAQ</a>
          </div>
          <div className={styles.linkColumn}>
            <h4>DETAILS</h4>
            <a href="#">Wholesale Login</a>
            <a href="#">Stockists</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">Manuals</a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomSection}>
        <div className={styles.legal}>
          <a href="#">B2B</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Returns</a>
          <span className={styles.copyright}>&copy; Acme Cups NZ 2024. All rights reserved.</span>
        </div>
        <div className={styles.credits}>
          <p>Acme is based in the cafe capital. Te Whanganui-a-Tara, Wellington. Our bowls are designed by Coffee Professionals, while adhering to the design principals of form and function. They&apos;re used all around the world by World Champion Baristas, Home Baristas, tea drinkers & everyone in between.</p>
        </div>
        <div className={styles.mascot}>
           <div className={styles.eggMascot}></div>
        </div>
      </div>
    </footer>
  );
}
