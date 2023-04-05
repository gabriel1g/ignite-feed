import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newTextComment, setNewTextComment] = useState('');

  const publicationDate = {
    formattedPublicationDate: format(publishedAt, "dd 'de' LLLL 'às' HH:mm", { locale: ptBR }),
    publicationDateRelativeToNow: formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true }),
  };

  function handleCreateNewComment(e) {
    e.preventDefault();

    setComments([...comments, newTextComment]);
    setNewTextComment('');
  }

  return (
    <article className={styles.post}>
      <div className={styles.post_top}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder={true} />
          <div className={styles.author_info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publicationDate.formattedPublicationDate} dateTime={publishedAt.toISOString()}>
          {publicationDate.publicationDateRelativeToNow}
        </time>
      </div>

      <div className={styles.post_content}>
        {content.map((line, index) => {
          switch (line.type) {
            case 'paragraph':
              return <p key={index}>{line.content}</p>;
            case 'link':
              return (
                <p key={index}>
                  <a href="#">{line.content}</a>
                </p>
              );
            case 'hashtags':
              return (
                <p key={index}>
                  {line.content.map((hashtag, index) => (
                    <a key={index} href="#">
                      {hashtag}
                    </a>
                  ))}
                </p>
              );
            default:
              break;
          }
        })}
      </div>

      <div className={styles.post_bottom}>
        <form className={styles.comment_form} onSubmit={handleCreateNewComment}>
          <strong>Deixe seu feedback</strong>
          <textarea onChange={(e) => setNewTextComment(e.target.value)} placeholder="Deixe um comentário..." value={newTextComment} />
          <div className={styles.publish_button}>
            <button type="submit">Publicar</button>
          </div>
        </form>

        <div className={styles.comment_list}>
          {comments.map((comment, index) => (
            <Comment key={index} content={comment} />
          ))}
        </div>
      </div>
    </article>
  );
}
