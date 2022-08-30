import styles from './component.module.scss';
import {FaSearch} from 'react-icons/fa';
import {CgSpinnerTwo} from 'react-icons/cg';
import {FormEvent, useRef} from 'react';

import appLogo from '../../assets/anthorflix.png';
import {Link, useNavigate} from 'react-router-dom';
import {getMovieByTitle} from '../../services/movies';
import {useState} from 'react';

export function Header() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick(event: FormEvent) {
    event.preventDefault();
    const inputValue = inputRef.current?.value;

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000);
    const movie = inputValue && (await getMovieByTitle(inputValue));
    setIsLoading(false);
    if (movie) navigate(`/movie/${movie.id}`);
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={appLogo} alt="Logotipo do web app" />
      </Link>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Buscar filmes" ref={inputRef} />
        <button type="submit" onClick={handleClick} disabled={isLoading}>
          {isLoading ? (
            <CgSpinnerTwo size={20} className={styles.spinner} />
          ) : (
            <FaSearch size={20} />
          )}
        </button>
      </div>
    </header>
  );
}
