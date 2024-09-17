import { createAction, props } from "@ngrx/store";
import { Movie } from "../../models/movie.model";


export const loadMovies = createAction('[Movies] Load Movies');

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{movies: Movie[]}>()
);

export const loadMoviesFailure = createAction(
  '[Movies] Load Movies Failure',
  props<{error: string}>()
);

export const selectMovie = createAction(
  '[Movies] Select Movie',
  props<{movieId: number}>()
)
