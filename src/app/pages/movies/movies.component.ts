import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { SharedPageModule } from '../../shared/shared-page.module';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { Subscription } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling'

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SharedPageModule, MovieCardComponent, ScrollingModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies?: Movie[] = [];
  moviesSub?: Subscription;
  constructor(private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.moviesSub = this.moviesService.getAllMovies().subscribe({
      next: movies => this.movies = movies,
      error: e => {
        if (e?.error?.cause?.code === 'DEPTH_ZERO_SELF_SIGNED_CERT') {
          console.warn('Invalid SSL certify from API');
          return;
        }
        console.error(e);
      }
    })
  }

  ngOnDestroy(): void {
    if (this.moviesSub) this.moviesSub.unsubscribe();
  }
}
