import styles from './styles.module.css';

type Props = {
  src: string;
  hasBorder?: boolean;
};

export function Avatar({ src, hasBorder = false }: Props) {
  return <img className={hasBorder ? styles.avatar_with_border : styles.avatar} src={src} />;
}
