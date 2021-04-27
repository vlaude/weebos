import styles from '../styles/AnimeCard.module.css';

export default function AnimeCard() {
  return (
    <div className={styles.card}>
      <img src="/anime_cover.jpeg" alt="" />
      <div className={styles.cardContent}>Anime title</div>
    </div>
  );
}
