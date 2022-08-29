import {MovieCard} from '../../components';
import {useMovies} from '../../hooks/useMovies';
import styles from './page.module.scss';

export function Movies() {
  const movies = useMovies();

  return (
    <div className={styles.container}>
      {movies?.map((movie) => (
        <MovieCard key={String(movie.id)} movie={movie} />
      ))}
    </div>
  );
}
