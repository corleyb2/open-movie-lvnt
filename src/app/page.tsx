"use server";

import { listMovies } from "@/actions/list-movies";
import { Pagination } from "@/components/pagination";
import { ResultCard } from "@/components/result-card";
import { Results } from "@/components/results";
import { SearchInput } from "@/components/search-input";
import {
  Button,
  Container,
  Flex,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

export type PageSearchParams = {
  searchParams: {
    query?: string;
    page?: number;
  };
};

export default async function Home({ searchParams }: PageSearchParams) {
  const {
    data: movieList,
    total,
    totalPages,
  } = await listMovies({
    query: searchParams.query ?? "",
    page: searchParams.page ?? 1,
  });

  return (
    <Container>
      <Stack>
        <Text>Welcome to MoviNiti!</Text>
        <Text>Please search for a movie below</Text>
        <SimpleGrid>
          <SearchInput />
        </SimpleGrid>
        {searchParams.query && total > 0 && (
          <div>
            <Results results={movieList} />
            <Pagination
              currentPage={searchParams.page ?? 1}
              totalResults={totalPages}
            />
          </div>
        )}
      </Stack>
    </Container>
  );
}
