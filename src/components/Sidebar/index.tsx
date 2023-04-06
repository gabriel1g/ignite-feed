import { PencilLine } from '@phosphor-icons/react';

import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100"
      />

      <div className={styles.profile}>
        <div className={styles.avatar_container}>
          <Avatar src="https://github.com/thegabrielrodrigues.png" hasBorder={true} />
        </div>

        <strong>Gabriel Rodrigues</strong>
        <span>Web Developer</span>

        <div className={styles.edit_profile}>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </div>
      </div>
    </aside>
  );
}
