import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    providers: [
    ]
  },
  {
    path: ':id',
    component: MovieDetailsComponent,
    providers: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}

