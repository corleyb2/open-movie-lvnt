"use client";

import { Button, Group, Stack } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationComponentProps {
  totalResults: number;
  currentPage: number;
}

export function Pagination({
  currentPage,
  totalResults,
}: PaginationComponentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * singular function to handle Previous and Next page states and putting query params into url
   * @param {-1 | 1} incrementor positive adds page, negative takes back
   */
  function handleChangePage(incrementor: 1 | -1) {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", (Number(currentPage) + incrementor).toString());
    router.replace(pathname + "?" + newParams.toString());
  }

  return (
    <Stack>
      Current Page is {currentPage ?? 1} of {totalResults} Total Results
      <Group>
        <Button onClick={() => handleChangePage(-1)}>Previous Page</Button>
        <Button onClick={() => handleChangePage(1)}>Next Page</Button>
      </Group>
    </Stack>
  );
}
