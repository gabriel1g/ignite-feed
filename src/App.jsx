import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import './global.css';

export default function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error optio dolor animi facilis nemo, quasi earum officia mollitia nisi
          molestiae, dolores qui iure et, consequuntur laborum id ullam harum corporis.
        </main>
      </div>
    </div>
  );
}
