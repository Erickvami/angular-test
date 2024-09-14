import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'movies',
            component: MoviesComponent
          },
          {
            path: 'movies/:id',
            component: MovieDetailsComponent
          }
        ]
    },
    {
      path: '**',
      redirectTo: ''
    }
];
