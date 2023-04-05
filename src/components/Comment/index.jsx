import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/thegabrielrodrigues.png" />

      <div className={styles.comment_column}>
        <div className={styles.comment_box}>
          <div className={styles.comment_box_top}>
            <div className={styles.author_and_time}>
              <strong>Gabriel Rodrigues</strong>
              <time title="13 de Maio às 14:28" dateTime="2023-05-13 14:28:40">
                Há 2 horas atrás
              </time>
            </div>
            <button className={styles.trash} title="Remover comentário">
              <Trash size={24} />
            </button>
          </div>

          <div className={styles.comment_box_content}>
            <p>{content}</p>
          </div>
        </div>

        <div className={styles.like_button}>
          <button>
            <ThumbsUp size={24} />
            <span>Curtir • 33</span>
          </button>
        </div>
      </div>
    </div>
  );
}
