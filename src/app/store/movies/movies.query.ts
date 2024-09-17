import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { State } from "../state";
import { MoviesStore } from "./movies.store";
import { Movie } from "../../models/movie.model";

@Injectable({ providedIn: 'root' })
export class MoviesQuery extends QueryEntity<State<Movie>> {
  constructor(protected override store: MoviesStore) {
    super(store);
  }

  selectMovies() {
    return this.select(state => state.data);
  }

  override selectError() {
    return this.select(state => state.error as any);
  }

  override selectLoading() {
    return this.select(state => state.loading);
  }
}
