import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { SharedPageModule } from '../../shared/shared-page.module';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { catchError, Subscription, tap } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { Store, StoreModule } from '@ngrx/store';
import { MoviesStore } from '../../store/movies/movies.store';
import { error } from 'console';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    SharedPageModule,
    MovieListComponent,
  ],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  constructor(private moviesService: MoviesService, private store: MoviesStore) {

  }

  ngOnInit(): void {
    this.store.update({data: [], loading: true, error: null})
    this.moviesService.getAllMovies().subscribe({
      next: data => this.store.update({ data, loading: false, error: null }),
      error: error => this.store.update({data: [], loading: false, error: error?.message})
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
