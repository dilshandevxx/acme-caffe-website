import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftLinks}>
        <a href="#">SHOP</a>
        <a href="#">JOURNAL</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </div>
      <div className={styles.rightLinks}>
        <a href="#">NZD ˅</a>
        <a href="#">SEARCH</a>
        <a href="#">ACCOUNT</a>
        <a href="#">CART(0)</a>
      </div>
    </nav>
  );
}
