import { Movie } from "../models/movie.model";

// Definir el estado
export interface State<T> {
  data: T[];
  error: string | null;
  loading: boolean;
}

// Estado inicial
export function createInitialState<T>(): State<T> {
  return {
    data: [],
    error: null,
    loading: false
  };
}
