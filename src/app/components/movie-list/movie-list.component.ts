import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SharedModule } from '../../shared/shared.module';
import { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { MoviesQuery } from '../../store/movies/movies.query';
import { MatCardLgImage } from '@angular/material/card';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SharedModule, MovieCardComponent, ScrollingModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Observable<Movie[]>;
  error: Observable<string | null>;
  loading: Observable<boolean>

  constructor(private movieQuery: MoviesQuery) {
    this.movies = this.movieQuery.selectMovies();
    this.error = this.movieQuery.selectError();
    this.loading = this.movieQuery.selectLoading();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
