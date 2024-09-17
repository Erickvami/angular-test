import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MoviesState } from "./movies.state";


export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectAllMovies = createSelector(
  selectMoviesState,
  state => state.movies
);

export const selectMoviesLoading = createSelector(
  selectMoviesState,
  state => state.loading
);

export const selectSelectedMovie = createSelector(
  selectMoviesState,
  state => state.selectedMovie
);
