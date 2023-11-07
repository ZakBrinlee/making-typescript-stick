export interface DataEntity {
  id: string;
}
export interface Movie extends DataEntity {
  director: string;
}
export interface Song extends DataEntity {
  singer: string;
}

export type DataEntityMap = {
  movie: Movie;
  song: Song;
};

type DataStoreMethods = {
  [K in keyof DataEntityMap as `add${Capitalize<K>}`]: (arg: DataEntityMap[K]) => DataEntityMap[K]
} & {
  [K in keyof DataEntityMap as `get${Capitalize<K>}`]: (id: string) => DataEntityMap[K]
} & {
  [K in keyof DataEntityMap as `getAll${Capitalize<K>}s`]: () => DataEntityMap[K][]
} & {
  [K in keyof DataEntityMap as `clear${Capitalize<K>}s`]: () => void
}


function isDefined<T>(x: T | undefined): x is T {
  // Check if typeof x is undefined
  return typeof x !== undefined
}

export class DataStore implements DataStoreMethods {
  // Loop through all of the keys in DataEntityMap and each should have a
  // dictionary with any key and the value should the interface movie | song
  #data: { [K in keyof DataEntityMap]: Record<string, DataEntityMap[K]>} = {
    movie: {},
    song: {}
  }

  addSong(song: Song): Song {
    this.#data.song[song.id] = song
    return song
  }

  getAllSongs(): Song[] {
    return Object.keys(this.#data.song).map(
      (key) => this.#data.song[key]
    ).filter(isDefined)
  }

  getSong(songKey: string): Song {
    const song = this.#data.song[songKey]
    if (!song) throw new Error(`Song with key ${songKey} not found`)
    return song
  }

  clearSongs(): void {
    this.#data.song = {}
  }

  addMovie(movie: Movie): Movie {
    this.#data.movie[movie.id] = movie
    return movie
  }

  getAllMovies(): Movie[] {
    return Object.keys(this.#data.movie).map(
      (key) => this.#data.movie[key]
    ).filter(isDefined)
  }

  getMovie(movieKey: string): Movie {
    const movie = this.#data.movie[movieKey]
    if (!movie) throw new Error(`Movie with key ${movieKey} not found`)
    return movie
  }

  clearMovies(): void {
    this.#data.movie = {}
  }
}