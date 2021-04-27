import styles from '../styles/HomeLayout1.module.css';

export default function HomeLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
