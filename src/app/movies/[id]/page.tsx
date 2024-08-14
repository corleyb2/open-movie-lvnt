import {
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import getMovieById from "../../../actions/get-movie-by-id";

async function MoviePage({ params }: { params: { id: string } }) {
  const movieDetails = await getMovieById(params.id);

  return (
    <Container style={{ marginTop: 12, marginBottom: 12 }}>
      <Flex justify="space-between">
        <Stack align="start">
          <Text size="xl">{movieDetails.Title}</Text>
          <Group gap={"md"}>
            <Text>{movieDetails.Year}</Text>
            <Text>{movieDetails.Rated}</Text>
            <Text>{movieDetails.Runtime}</Text>
          </Group>
        </Stack>
        <Group gap={"md"} align="center" justify="space-between">
          {movieDetails.Ratings.map((r) => {
            return (
              <Flex>
                {r.Source} - {r.Value}
              </Flex>
            );
          })}
        </Group>
      </Flex>
      <Flex gap={"sm"}>
        <Image
          height={250}
          src={movieDetails.Poster}
          alt={`Poster art - ${movieDetails}`}
        />
        <Stack>{JSON.stringify(movieDetails)}</Stack>
      </Flex>
    </Container>
  );
}

export default MoviePage;
