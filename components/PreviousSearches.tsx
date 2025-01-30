"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

export default function PreviousSearches() {
  const [previousSearches, setPreviousSearches] = useLocalStorage<string[]>(
    "previousSearches",
    []
  );
  const router = useRouter();

  const handleSelect = (city: string) => {
    router.push(`/weather/${city}`);
  };

  const clearHistory = () => {
    setPreviousSearches([]);
  };

  return (
    <div className="w-full mt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700 px-3 mb-2">
          Previous Searches
        </h3>
        <button
          onClick={clearHistory}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Clear History
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {previousSearches.map((city) => (
          <span
            key={city}
            onClick={() => handleSelect(city)}
            className="flex w-full text-black md:justify-between py-4 px-3 text-4xl font-bold text-center capitalize hover:bg-neutral-200 hover:cursor-pointer transition-colors"
          >
            {city}
          </span>
        ))}
      </div>
      {previousSearches.length === 0 &&<span className="text-gray-500 flex justify-center items-center h-[20vh]">No previous searches</span>}
    </div>
  );
}
