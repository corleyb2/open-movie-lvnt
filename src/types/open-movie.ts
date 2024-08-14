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



export interface OpenMovieDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Array<MovieRating>;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  
}

export interface MovieRating {
  Source: string
  Value: string
}