// movies.store.ts
import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore, QueryEntity } from '@datorama/akita';
import { createInitialState, State } from '../state';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';

// Creates Store
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'movies' })
export class MoviesStore extends EntityStore<State<Movie>> {
  constructor() {
    super(createInitialState());
  }
}
