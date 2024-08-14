"use server";

import { PageSearchParams } from "@/app/page";
import { OpenMovieSearchResponse } from "@/types";

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

  const results = await fetch(`${baseUrl}/?` + urlParams.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => await res.json() as OpenMovieSearchResponse)

  const pageSize = 10 // not confirmed by OMDb but all attempted results show a max of 10 per page.
  
  return {
    data: results.Search,
    total: results.totalResults,
    totalPages: Math.ceil(results.totalResults / pageSize),
  }
}
