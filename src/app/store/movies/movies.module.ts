// movies.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { moviesReducer } from './movies.reducer';
import { MoviesEffects } from './movies.effects';
import * as fromMoviesActions from './movies.actions';

@NgModule({
  imports: [
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MoviesEffects])
  ],
  providers: [
    { provide: fromMoviesActions, useValue: fromMoviesActions }
  ]
})
export class MoviesModule {}
