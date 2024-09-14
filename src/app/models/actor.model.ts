import { Movie } from "./movie.model"

export class Actor {
  id: number | undefined
  name?: string | null = ''
  imageURI?: string | null = ''
  registered?: Date | null
  isDeleted: boolean = false
  movies?: Movie[] | null = []
}
