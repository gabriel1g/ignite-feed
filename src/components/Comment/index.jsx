import { ThumbsUp, Trash } from '@phosphor-icons/react';

import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/diego3g.png" />

      <div className={styles.comment_column}>
        <div className={styles.comment_box}>
          <div className={styles.comment_box_top}>
            <div className={styles.author_and_time}>
              <strong>Diego Fernandes</strong>
              <time title="13 de Maio às 14:28" dateTime="2023-05-13 14:28:40">
                Há 2 horas atrás
              </time>
            </div>
            <button className={styles.trash} title="Remover comentário">
              <Trash size={24} />
            </button>
          </div>

          <div className={styles.comment_box_content}>
            <p>Muito bom, parabéns!! 👏👏</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos dolore nostrum voluptates praesentium a? Maiores ipsum,
              error tempore aliquid fuga quae et cupiditate iure ratione facilis ab eius temporibus.
            </p>
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
