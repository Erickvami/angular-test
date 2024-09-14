import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedPageModule } from '../../../shared/shared-page.module';
import { MoviesService } from '../../../services/movies.service';
import { Subscription } from 'rxjs';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [SharedPageModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy{
  movieId?: number | null;
  movie?: Movie | null;
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {

  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.movieId = idParam && !isNaN(Number(idParam)) ? Number(idParam) : null;
      if (this.movieId)
        this.moviesService.getMovieById(this.movieId, false, false)
          .subscribe({
            next: movie => this.movie = movie,
            error: (e) => {
              if (e?.error?.cause?.code === 'DEPTH_ZERO_SELF_SIGNED_CERT') {
                console.warn('Invalid SSL certify from API');
                return;
              }
              console.error(e);
            }
          });
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) this.routeSub.unsubscribe();
  }
}
