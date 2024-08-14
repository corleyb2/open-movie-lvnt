"use server";

import { listMovies } from "@/actions/list-movies";
import { Pagination } from "@/components/pagination";
import { ResultCard } from "@/components/result-card";
import { Results } from "@/components/results";
import { SearchInput } from "@/components/search-input";
import { Button, Group } from "@mantine/core";

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
    <>
      <SearchInput />
      {searchParams.query && total > 0 && (
        <div>
          <Results results={movieList} />
          <Pagination
            currentPage={searchParams.page ?? 1}
            totalResults={totalPages}
          />
        </div>
      )}
    </>
  );
}
