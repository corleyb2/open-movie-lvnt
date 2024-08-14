import { OpenMovieResult } from "@/types";
import { Stack } from "@mantine/core";
import { ResultCard } from "./result-card";

type ResultsComponentProps = {
  results: OpenMovieResult[];
};
export function Results({ results }: ResultsComponentProps) {
  return (
    <Stack>
      {results.map((r) => {
        return <ResultCard key={r.imdbID} cardData={r} />;
      })}
    </Stack>
  );
}
