import { Actor } from "./actor.model"
import { Genre } from "./genre.model"

export class Movie {
  id: number
  title?: string | undefined
  description?: string | undefined
  registered: Date | undefined
  isDeleted: boolean = false
  imageURI?: string | null
  actors?: Actor[] | null = []
  genres?: Genre[] | null = []

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';

  }
}
