import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';

const posts = [
  {
    id: 1,
    author: { avatarUrl: 'https://github.com/rafaballerini.png', name: 'Rafaela Ballerini', role: 'Dev Front-End' },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉rafaballerini.com/doctorcare',
      },
      {
        type: 'hashtags',
        content: ['#novoprojeto', '#nlw', '#rocketseat'],
      },
      {
        type: 'teste',
      },
    ],
    publishedAt: new Date('2023-05-13 08:13:30'),
  },
  {
    id: 2,
    author: { avatarUrl: 'https://github.com/diego3g.png', name: 'Diego Fernandes', role: 'Dev Full-Stack' },
    content: [
      {
        type: 'paragraph',
        content: 'Eai pessoaaaal 👋',
      },
      {
        type: 'paragraph',
        content: 'Venham conferir meu projeto novo. É uma calculadora interplanetária que calcula sua idade em outros planetas.',
      },
      {
        type: 'paragraph',
        content: 'Link abaixo 💚💚',
      },
      {
        type: 'link',
        content: '👉diego3g.dev/calculator',
      },
      {
        type: 'hashtags',
        content: ['#novoprojeto', '#calculadora', '#rocketseat'],
      },
    ],
    publishedAt: new Date('2023-04-28 18:47:00'),
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
          ))}
        </main>
      </div>
    </div>
  );
}
