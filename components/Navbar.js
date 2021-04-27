import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.brand}>Weebos</li>
        <li className="push-left">
          <input type="text" placeholder="Search ..." />
        </li>
        <li className="push-left">Profile</li>
      </ul>
    </nav>
  );
}
