import styles from '../styles/AnimeList.module.css';

export default function AnimeList({ children }) {
  return <div className={styles.container}>{children}</div>;
}
