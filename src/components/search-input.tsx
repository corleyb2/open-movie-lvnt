"use client";

import { Button, CloseButton, Group, Input } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export function SearchInput() {
  const [searchVal, setSearchVal] = useState<string>("");

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  /**
   * On submission of input, set the url search params to trigger a search
   * see: https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#2-update-the-url-with-the-search-params
   */
  function handlePerformSearch(searchTerm: string) {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("query", searchTerm);
    router.replace(pathName + "?" + newParams.toString());
  }

  function handleSubmitInput(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(searchVal);
    handlePerformSearch(searchVal);
  }

  function clearSearch() {
    setSearchVal("");
    handlePerformSearch("");
  }
  return (
    <form onSubmit={(e) => handleSubmitInput(e)}>
      <Group gap="lg">
        <Input
          value={searchVal}
          onChange={(e) => setSearchVal(e.currentTarget.value)}
          name="search"
          placeholder="Search"
          // leftSection={}  //TODO: search icon?
          rightSectionPointerEvents="all"
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={() => clearSearch()}
              style={{ display: searchVal ? undefined : "none" }}
            />
          }
        />
        <Button type="submit">Submit Search</Button>
      </Group>
    </form>
  );
}
