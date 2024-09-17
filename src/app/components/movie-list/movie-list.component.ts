import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SharedModule } from '../../shared/shared.module';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllMovies, selectMoviesLoading } from '../../store/movies/movies.selectors';
import { MoviesModule } from '../../store/movies/movies.module';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SharedModule, MovieCardComponent, ScrollingModule, MoviesModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Observable<Movie[]>;
  loading: Observable<boolean>;

  constructor(private store: Store) {
    this.movies = this.store.select(selectAllMovies);
    this.loading = this.store.select(selectMoviesLoading);
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

}
