import { createReducer, on } from "@ngrx/store";
import { initialMoviesState } from "./movies.state";
import { loadMovies, loadMoviesFailure, loadMoviesSuccess, selectMovie } from "./movies.actions";

export const moviesReducer = createReducer(
  initialMoviesState,
  // adding actions to reducer
  on(loadMovies, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false,
    error: null,
  })),
  on(loadMoviesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(selectMovie, (state, { movieId }) => ({
    ...state,
    selectedMovie: state.movies.find(movie => movie.id === movieId) || null
  }))
);
