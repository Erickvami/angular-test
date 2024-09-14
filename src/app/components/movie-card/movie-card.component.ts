import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedComponentModule } from '../../shared/shared-component.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, SharedComponentModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit, OnDestroy {
  @Input() movie?: Movie;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
