import { Movie } from "../../models/movie.model";

export interface MoviesState {
  movies: Movie[];
  selectedMovie: Movie | null;
  loading: boolean;
  error: string | null;
}

export const initialMoviesState: MoviesState = {
  movies: [],
  selectedMovie: null,
  loading: false,
  error: null,
};
