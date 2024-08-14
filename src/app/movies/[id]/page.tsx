import { Container } from "@mantine/core";
import React from "react";
import getMovieById from "../../../actions/get-movie-by-id";

async function MoviePage({ params }: { params: { id: string } }){

  const movieDetails = await getMovieById(params.id)
  
  return (<Container>{JSON.stringify(movieDetails)}</Container>)
}

export default MoviePage