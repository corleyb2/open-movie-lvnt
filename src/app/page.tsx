"use server";

import { listMovies } from "@/actions/list-movies";
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
      <div
        id="list-results"
        style={{
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {searchParams.query && total > 0 && (
          <div>
            {`Search results for '${searchParams.query.toString()}' - ${total} found`}
            {movieList.map((r) => {
              return (
                <div key={r.imdbID} style={{ display: "flex" }}>
                  {r.Title}
                </div>
              );
            })}
          </div>
        )}
        <div>total pages: {totalPages}</div>
      </div>
    </>
  );
}
