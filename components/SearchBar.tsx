"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const router = useRouter();
  const [previousSearches, setPreviousSearches] = useLocalStorage<string[]>(
    "previousSearches",
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/weather/${city}`);
    if (!previousSearches.includes(city)) {
      setPreviousSearches([...previousSearches, city]);
    }
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mx-auto ">
      <div className="flex flex-col md:flex-row items-center w-full gap-2">
        <Input
          type="text"
          autoComplete="on"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Type here to search..."
          className="w-full px-4 py-2 text-gray-700 border-none underline underline-offset-8"
        />
        <Button
          type="submit"
          size={"lg"}
          className="px-8 h-12 border border-black bg-black text-white font-semibold hover:bg-neutral-800 transition-colors"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
