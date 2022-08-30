import styles from './component.module.scss';

import appLogo from '../../assets/anthorflix.png';
import {Link} from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={appLogo} alt="Logotipo do web app" />
      <nav className={styles.nav}>
        <Link to="/">Movies</Link>
        <Link to="/my-list">My List</Link>
      </nav>
    </header>
  );
}

// TODO: add search batendo em movies/search?title='nome do filme'
