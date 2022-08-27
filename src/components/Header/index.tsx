import styles from './Header.module.scss';

import appLogo from '../../assets/anthorflix.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={appLogo} alt="Logotipo do web app" />
    </header>
  );
}
