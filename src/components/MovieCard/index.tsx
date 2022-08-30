import styles from './component.module.scss';
import {IoStar, IoStarOutline, IoStarHalf} from 'react-icons/io5';
import {RiMovieLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

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
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.poster} alt={`${movie.title} poster`} />
      </Link>

      <main>
        <div className={styles.cardContent}>
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
        </div>
        <Link to={`/movie/${movie.id}`} className={styles.detailsLink}>
          Ver mais
          <RiMovieLine />
        </Link>
      </main>
    </div>
  );
}
