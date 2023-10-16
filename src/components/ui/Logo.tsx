import styles from './Logo.module.scss'



export const Logo = () => {
  return (
    <p className={styles.bounce}>
      <span className={styles.letter}>W</span>
      <span className={styles.letter}>O</span>
      <span className={styles.letter}>R</span>
      <span className={styles.letter}>K</span>
      <span className={styles.letter}>S</span>
      <span className={styles.letter}>P</span>
      <span className={styles.letter}>A</span>
      <span className={styles.letter}>C</span>
      <span className={styles.letter}>E</span>
      <span className={styles.letter}>R</span>
    </p>
  );
}