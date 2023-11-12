"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Input } from "../ui/input";

export default function SearchBar({
  searchable,
  search,
  placeholder,
}: {
  searchable: string;
  search?: string;
  placeholder: string;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState(search || "");

  React.useEffect(() => {
    if (!searchQuery) {
      router.push(`/${searchable}`);
    } else {
      router.push(`/${searchable}?search=${searchQuery}`);
    }
  }, [searchQuery]);

  return (
    <>
      <div className="searchbar">
        <Image src="/assets/search.svg" alt="search" width={24} height={24} />
        <Input
          id="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="no-focus searchbar_input"
        />
      </div>
    </>
  );
}
