"use client"

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';


export default function PreviousSearches() {
  const [previousSearches, setPreviousSearches] = useLocalStorage<string[]>('previousSearches', []);
  const router = useRouter();

  const handleSelect = (city: string) => {
    router.push(`/weather/${city}`);
  };


  return (
    <div className="w-full mt-6">
      <h3 className="text-lg font-semibold text-gray-700 px-3 mb-2">Previous Searches</h3>
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
    </div>
  );
}