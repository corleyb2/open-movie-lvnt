"use server";

import { OpenMovieSearchResponse } from "@/types";

export async function listMovies() {
  const baseUrl = process.env.OMDB_BASE_URL ?? "";
  const apiKey = process.env.OMDB_API_KEY ?? "";

  const urlParams = new URLSearchParams({
    apiKey,
  });

  const testQuery = "Titanic"
  urlParams.append("s", String(testQuery).toLowerCase());

  console.log("Here", `${baseUrl}/?` + urlParams.toString());

  const results = await fetch(`${baseUrl}/?` + urlParams.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => await res.json() as OpenMovieSearchResponse)

  const pageSize = 10 // not confirmed by OMDb but all attempted results show a max of 10 per page.
  return {
    data: results.Search,
    total: results.totalCount,
    totalPages: (results.totalCount / pageSize)
  }
}
