import { Movie } from "./movie.model";

export class Genre {
  id: number | undefined;
  name?: string | null = '';
  movies?: Movie[] | null = [];
}
