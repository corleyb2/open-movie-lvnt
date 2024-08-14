export interface OpenMovieResult {
  Title: string;
  Year: string;
  imdbID: string; 
  Type: ResourceType;
  Poster: string;   // a url
}

export type ResourceType = "movie" | "series" | "episode"


export interface BaseOpenMovieSearchResponse {
  Response: boolean  // true in this case
}

export interface OpenMovieSearchResponse extends BaseOpenMovieSearchResponse {
  Search: Array<OpenMovieResult>
  totalResults: number
}

/**
 * Based on:
 * {
 *  "Response": "False",
 *  "Error": "Movie not found!"
 * }
 */
export interface OpenMovieSearchError extends BaseOpenMovieSearchResponse {
  Error: string
}

