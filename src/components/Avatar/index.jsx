import styles from './styles.module.css';

export function Avatar({ src, hasBorder = false }) {
  return <img className={hasBorder ? styles.avatar_with_border : styles.avatar} src={src} />;
}
