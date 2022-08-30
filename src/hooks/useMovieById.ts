import {useState, useEffect, useCallback} from 'react';
import {Movie, getMovieById} from '../services/movies';

export const useMovieById = (id: string) => {
  const [movie, setMovie] = useState({} as Movie);

  const getApiMovie = useCallback(async () => {
    const movie = await getMovieById(id);
    setMovie(movie);
  }, []);

  useEffect(() => {
    getApiMovie();
  }, []);

  return movie;
};
