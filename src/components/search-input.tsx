"use client";

import { useState } from "react";

export function SearchInput() {
  const [searchVal, setSearchVal] = useState<string>("");


  function handleSubmitInput(e: any) {
    e.preventDefault();
    console.log(searchVal);
  }

  return (
    <form onSubmit={handleSubmitInput}>
      <input type="text" onChange={(e) => setSearchVal(e.target.value)} />
      <button type="submit">Submit Search</button>
    </form>
  );
}
