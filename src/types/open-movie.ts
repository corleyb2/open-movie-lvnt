export interface OpenMovieResult {
  Title: string;
  Year: string;
  imdbID: string; 
  Type: ResourceType;
  Poster: string;   // a url
}

export type ResourceType = "movie" | "series" | "episode"


export interface OpenMovieSearchResponse {
  Search: Array<OpenMovieResult>
  totalResults: number
  Response: boolean  // true in this case
}

/**
 * Based on:
 * {
 *  "Response": "False",
 *  "Error": "Movie not found!"
 * }
 */
export interface OpenMovieSearchError {
  Error: string
  Response: boolean  // false in this case
}