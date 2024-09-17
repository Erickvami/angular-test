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
            loadChildren: () => import('./pages/movies/movies-routing.module').then(m => m.MoviesRoutingModule)
          },
          {
            path: '**',
            redirectTo: '/movies'
          }
        ]
    },
    {
      path: '**',
      redirectTo: ''
    }
];
