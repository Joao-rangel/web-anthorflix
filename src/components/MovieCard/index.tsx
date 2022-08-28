import styles from './component.module.scss';
import {IoStar, IoStarOutline, IoStarHalf} from 'react-icons/io5';

interface MovieCardProps {
  movie: {
    id: string;
    poster: string;
    title: string;
    genre: string;
    plot: string;
    rate: number;
  };
}

export function MovieCard({movie}: MovieCardProps) {
  const rate = Math.round(movie.rate) / 2;
  return (
    <div className={styles.movieCard}>
      <img src={movie.poster} alt={`${movie.title} poster`} />

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
        <h1>{movie.title}</h1>
        <h3>{movie.genre}</h3>
        <p>{movie.plot}</p>
      </main>
    </div>
  );
}
