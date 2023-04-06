import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { useState } from 'react';

import { Avatar } from '../Avatar';
import styles from './styles.module.css';

type Props = {
  content: string;
  onRemove: (commentText: string) => void;
};

export function Comment({ content, onRemove }: Props) {
  const [likeCount, setLikeCount] = useState<number>(0);

  function handleLikeComment() {
    setLikeCount((prevState) => prevState + 1);
  }

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
              <Trash onClick={() => onRemove(content)} size={24} />
            </button>
          </div>

          <div className={styles.comment_box_content}>
            <p>{content}</p>
          </div>
        </div>

        <div className={styles.like_button}>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            <span>Curtir • {likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
