"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";



export function SearchInput() {
  const [searchVal, setSearchVal] = useState<string>("");

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  /**
   * On submission of input, set the url search params to trigger a search
   * see: https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#2-update-the-url-with-the-search-params
   * @param e form submission event
   */
  function handleSubmitInput(e: any) {
    e.preventDefault();
    console.log(searchVal);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("query", searchVal);
    router.replace(pathName + "?" + newParams.toString());
  }

  return (
    <form onSubmit={handleSubmitInput}>
      <input type="text" onChange={(e) => setSearchVal(e.target.value)} />
      <button type="submit">Submit Search</button>
    </form>
  );
}
