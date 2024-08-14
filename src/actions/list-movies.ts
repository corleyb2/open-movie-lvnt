"use server";

import { PageSearchParams } from "@/app/page";
import { BaseOpenMovieSearchResponse, OpenMovieSearchError, OpenMovieSearchResponse } from "@/types";

export async function listMovies({page, query}: PageSearchParams["searchParams"]) {
  const baseUrl = process.env.OMDB_BASE_URL ?? "";
  const apiKey = process.env.OMDB_API_KEY ?? "";

  const urlParams = new URLSearchParams({
    apiKey,
  });


  if (query){
    urlParams.append("s", String(query).toLowerCase());
  }
  if (page){
    urlParams.append("page", String(page))
  }

  const response = await fetch(`${baseUrl}/?` + urlParams.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  
  // Handle bad error
  if (!response.ok) {
    console.log("OK?", response.ok)
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the JSON response
  const json: BaseOpenMovieSearchResponse = await response.json();

  // Handle Error if no matches
  if (json.Response === false){
    console.error(json)
    const error = json as OpenMovieSearchError
    throw Error(error.Error ??  "No movie matches found")
  }

  // Type casting for results
  const results = json as OpenMovieSearchResponse
    
  const pageSize = 10 // not confirmed by OMDb but all attempted results show a max of 10 per page.
  
  return {
    data: results.Search,
    total: results.totalResults,
    totalPages: Math.ceil(results.totalResults / pageSize),
  }
}
