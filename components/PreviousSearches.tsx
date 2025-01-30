"use client"

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';

interface PreviousSearchesProps {
  searches: string[];
  onSelect: (city: string) => void;
}

export default function PreviousSearches() {
  const [previousSearches, setPreviousSearches] = useLocalStorage<string[]>('previousSearches', []);
  const router = useRouter();

  const handleSelect = (city: string) => {
    router.push(`/weather/${city}`);
  };


  return (
    <div className="w-full mt-6">
      <h3 className="text-lg font-semibold text-gray-700 px-3 mb-2">Previous Searches</h3>
      <div className="flex flex-col md:flex-row gap-4">
        {previousSearches.map((city) => (
          <div
            key={city}
            onClick={() => handleSelect(city)}
            className="flex w-full min-w-1/5 text-black md:justify-between py-4 px-3 text-4xl font-bold text-center capitalize hover:bg-neutral-200 hover:cursor-pointer transition-colors"
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  );
}