import { Container } from "@mantine/core";
import React from "react";

function MoviePage({ params }: { params: { id: string } }){
  
  return (<Container>Params: {params.id}</Container>)
}

export default MoviePage