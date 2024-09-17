import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MoviesService } from "../../services/movies.service";
import { loadMovies, loadMoviesFailure, loadMoviesSuccess } from "./movies.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private moviesService: MoviesService) {
    console.log(actions$);
  }

  loadMovies$ = createEffect(() => {
    console.log(this.actions$);
    return this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(() =>
        this.moviesService.getAllMovies().pipe(
          map(movies => {
            console.log(movies)
            return loadMoviesSuccess({ movies })
          }),
          catchError(error => {
            console.log(error.message)
            return of(loadMoviesFailure({ error: error.message }))
          })
        )
      )
    )
  }
  )
}
