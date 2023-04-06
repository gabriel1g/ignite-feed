import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { PostDTO } from '../../dtos/PostDTO';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

export function Post({ author, content, publishedAt }: PostDTO) {
  const [comments, setComments] = useState<string[]>([]);
  const [newTextComment, setNewTextComment] = useState<string>('');

  const isNewCommentEmpty = newTextComment.length === 0;
  const publicationDate = {
    formattedPublicationDate: format(publishedAt, "dd 'de' LLLL 'às' HH:mm", { locale: ptBR }),
    publicationDateRelativeToNow: formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true }),
  };

  class Form {
    handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
      e.target.setCustomValidity('');
      setNewTextComment(e.target.value);
    }

    handleNewInvalidComment(e: InvalidEvent<HTMLTextAreaElement>) {
      e.target.setCustomValidity('Preencha este campo por favor!');
    }
  }

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();

    setComments([...comments, newTextComment]);
    setNewTextComment('');
  }

  function handleDeleteComment(commentText: string) {
    setComments(comments.filter((comment) => comment !== commentText));
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
          <textarea
            onChange={new Form().handleNewCommentChange}
            onInvalid={new Form().handleNewInvalidComment}
            placeholder="Deixe um comentário..."
            required={true}
            value={newTextComment}
          />
          <div className={styles.publish_button}>
            <button disabled={isNewCommentEmpty} type="submit">
              Publicar
            </button>
          </div>
        </form>

        <div className={styles.comment_list}>
          {comments.map((comment, index) => (
            <Comment key={index} content={comment} onRemove={handleDeleteComment} />
          ))}
        </div>
      </div>
    </article>
  );
}
