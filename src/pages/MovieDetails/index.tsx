import {useParams} from 'react-router-dom';
import {MovieDetailsContent} from '../../components';
import {useMovieById} from '../../hooks/useMovieById';
import styles from './page.module.scss';

export function MovieDetails() {
  const {movieId} = useParams();

  const movie = movieId && useMovieById(movieId);

  return (
    <div className={styles.container}>
      {movie && <MovieDetailsContent key={String(movie.id)} movie={movie} />}
    </div>
  );
}
