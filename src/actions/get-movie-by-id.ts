import { OpenMovieDetails } from "@/types"

async function getMovieById(imdbId: string){

  const baseUrl = process.env.OMDB_BASE_URL ?? ""
  const apiKey = process.env.OMDB_API_KEY ?? ""

  // i ==> IMDBiD per docs
  const urlParams = new URLSearchParams({
    apiKey,
    i: imdbId,
    plot: "full",
  })

  const response = await fetch(baseUrl + "?" + urlParams.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })

  if (!response.ok){
    throw Error("HTTP Server error: " + response.statusText)
  }

  const json = await response.json()

  return json as OpenMovieDetails
}

export default getMovieById