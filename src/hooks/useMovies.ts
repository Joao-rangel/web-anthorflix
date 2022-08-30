import {useState, useEffect, useCallback} from 'react';
import {Movie, getMovies} from '../services/movies';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getApiMovies = useCallback(async () => {
    const movies = await getMovies();
    setMovies(movies);
  }, []);

  useEffect(() => {
    getApiMovies();
  }, []);

  return movies;
};
