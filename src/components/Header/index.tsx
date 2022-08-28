import styles from './component.module.scss';

import appLogo from '../../assets/anthorflix.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={appLogo} alt="Logotipo do web app" />
      <nav className={styles.nav}>
        <a href="#">Movies</a>
        <a href="#">My List</a>
      </nav>
    </header>
  );
}
