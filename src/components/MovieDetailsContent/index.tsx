import styles from './component.module.scss';
import {IoStar, IoStarOutline, IoStarHalf} from 'react-icons/io5';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {deleteMovie} from '../../services/movies';
import {useNavigate} from 'react-router-dom';

interface MovieDetailsContentProps {
  movie: {
    id: string;
    poster: string;
    title: string;
    genre: string;
    plot: string;
    rate: number;
    actors: string;
    year: string;
    director: string;
    runtime: string;
  };
}

export function MovieDetailsContent({movie}: MovieDetailsContentProps) {
  const navigate = useNavigate();

  const rate = Math.round(movie.rate) / 2;

  const handleDelete = async () => {
    await deleteMovie(movie.id);

    navigate('/');
  };

  return (
    <div className={styles.movieDetailsContent}>
      <img src={movie.poster} alt={`${movie.title} poster`} />

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
          <p>
            <b>Atores:</b> {movie.actors}
          </p>
          <p>
            <b>Ano:</b>
            {movie.year}
          </p>
          <p>
            <b>Gênero:</b>
            {movie.genre}
          </p>
          <p>
            <b>Direção:</b>
            {movie.director}
          </p>
          <p>
            <b>Duração:</b>
            {movie.runtime}
          </p>
          <p>
            <b>Sinopse:</b>
            {movie.plot}
          </p>
        </div>
      </main>
      <button className={styles.deleteButton} onClick={() => handleDelete()}>
        <RiDeleteBin6Line size={18} />
      </button>
    </div>
  );
}
