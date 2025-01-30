import PreviousSearches from "@/components/PreviousSearches";

export default async function Home() {

  return (
    <main className="flex flex-col bg-gray-300 justify-center w-full px-4">
      <PreviousSearches />
    </main>
  );
}
