"use server";

import { listMovies } from "@/actions/list-movies";
import { SearchInput } from "@/components/search-input";

export default async function Home() {
  const { data: movieList, total } = await listMovies();


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
        {movieList.map((r) => {
          return (
            <div key={r.imdbID} style={{ display: "flex" }}>
              {r.Title}
            </div>
          );
        })}
      </div>
    </>
  );
}
