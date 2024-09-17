import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { SharedPageModule } from '../../shared/shared-page.module';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { Subscription } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { MoviesState } from '../../store/movies/movies.state';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/movies/movies.actions';
import { MoviesModule } from '../../store/movies/movies.module';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SharedPageModule, MovieCardComponent, ScrollingModule, MovieListComponent, MoviesModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies?: Movie[] = [];
  subscription?: Subscription;
  constructor(private store: Store) {
    console.log(store)
  }

  ngOnInit(): void {
    this.store.dispatch(loadMovies());
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
