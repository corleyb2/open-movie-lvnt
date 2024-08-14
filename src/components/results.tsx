"use client"

import { OpenMovieResult } from "@/types";
import { Stack, Text } from "@mantine/core";
import { ResultCard } from "./result-card";
import { useSearchParams } from "next/navigation";

type ResultsComponentProps = {
  results: OpenMovieResult[];
};
export function Results({ results }: ResultsComponentProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get("query")
  return (
    <Stack>
      <Text>{`Displaying results for "${query}"`}</Text>
      {results.map((r) => {
        return <ResultCard key={r.imdbID} cardData={r} />;
      })}
    </Stack>
  );
}
