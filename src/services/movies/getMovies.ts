import {api} from '../api';

export type Movie = {
  id: string;
  title: string;
  year: number;
  rate: number;
  genre: string;
  director: string;
  actors: string;
  runtime: string;
  poster: string;
  plot: string;
};

export const getMovies = async (year?: string): Promise<Movie[]> => {
  const {data} = await api.get('movies', {params: {year}});

  return data.movies;
};
