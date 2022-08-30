import {api} from '../api';

export type Movie = {
  id: string;
  title: string;
  year: string;
  rate: number;
  genre: string;
  director: string;
  actors: string;
  runtime: string;
  poster: string;
  plot: string;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const {data} = await api.get(`movies/${id}`);

  return data.movie;
};

export const getMovieByTitle = async (title: string): Promise<Movie> => {
  const {data} = await api.get('movies/search', {params: {title}});

  return data.movie;
};

export const getMovies = async (year?: string): Promise<Movie[]> => {
  const {data} = await api.get('movies', {params: {year}});

  return data.movies;
};

export const deleteMovie = async (id: string): Promise<any> => {
  const response = await api.delete(`movies/${id}`);

  return response;
};
