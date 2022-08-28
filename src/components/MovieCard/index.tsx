import styles from './component.module.scss';
import {IoStar, IoStarOutline, IoStarHalf} from 'react-icons/io5';

interface MovieCardProps {
  movie: {
    Poster: string;
    Title: string;
    Genre: string;
    Plot: string;
    imdbRating: number;
  };
}

export function MovieCard({movie}: MovieCardProps) {
  const rate = Math.round(movie.imdbRating) / 2;
  return (
    <div className={styles.movieCard}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />

      <main>
        {[...Array(5)].map((_, i) =>
          rate - i === 0.5 ? (
            <IoStarHalf key={i + 1} />
          ) : i < rate ? (
            <IoStar key={i + 1} />
          ) : (
            <IoStarOutline key={i + 1} />
          ),
        )}
        <h1>{movie.Title}</h1>
        <h3>{movie.Genre}</h3>
        <p>{movie.Plot}</p>
      </main>
    </div>
  );
}
