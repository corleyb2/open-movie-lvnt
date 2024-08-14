"use server";

import { listMovies } from "@/actions/list-movies";
import { ResultCard } from "@/components/result-card";
import { Results } from "@/components/results";
import { SearchInput } from "@/components/search-input";

export type PageSearchParams = {
  searchParams: {
    query?: string;
    page?: string;
  };
};

export default async function Home({ searchParams }: PageSearchParams) {
  const {
    data: movieList,
    total,
    totalPages,
  } = await listMovies({ ...searchParams });

  return (
    <>
      <SearchInput />
        {searchParams.query && total > 0 && (
          <div>
          <Results results={movieList}/>
          <div>Current Page: </div>
          </div>
        )}
    </>
  );
}
