import {MovieCard} from '../../components';
import styles from './page.module.scss';

export function Movies() {
  return (
    <div className={styles.container}>
      <MovieCard movie={mockMovie} />
      <MovieCard movie={mockMovie} />
      <MovieCard movie={mockMovie} />
      <MovieCard movie={mockMovie} />
    </div>
  );
}

const mockMovie = {
  Title: 'The Batman',
  Year: '2022',
  Rated: 'PG-13',
  Released: '04 Mar 2022',
  Runtime: '176 min',
  Genre: 'Action, Crime, Drama',
  Director: 'Matt Reeves',
  Writer: 'Matt Reeves, Peter Craig, Bob Kane',
  Actors: 'Robert Pattinson, Zoë Kravitz, Jeffrey Wright',
  Plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  Language: 'English, Spanish, Latin, Italian',
  Country: 'United States',
  Awards: '2 wins & 25 nominations',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '7.9/10',
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '85%',
    },
    {
      Source: 'Metacritic',
      Value: '72/100',
    },
  ],
  Metascore: '72',
  imdbRating: 7.4,
  imdbVotes: '570,429',
  imdbID: 'tt1877830',
  Type: 'movie',
  DVD: '19 Apr 2022',
  BoxOffice: '$369,345,583',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};