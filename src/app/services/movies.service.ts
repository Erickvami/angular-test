import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Movie } from '../models/movie.model';
import { environment } from '../../environments/environment';
import { MoviesStore } from '../store/movies/movies.store';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient,) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieById(id: number, hasActors?: boolean, hasGenres?: boolean): Observable<Movie> {
    let params = new HttpParams();
    if (hasActors) params = params.set('hasActors', hasActors.toString());
    if (hasGenres) params = params.set('hasGenres', hasGenres.toString());
    return this.http.get<Movie>(`${this.apiUrl}/${id}`, { params });
  }
}
