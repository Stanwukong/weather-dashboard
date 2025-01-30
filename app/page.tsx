import PreviousSearches from "@/components/PreviousSearches";

export default async function Home() {

  return (
    <main className="min-h-screen flex flex-col bg-gray-300 justify-center w-full">
      <PreviousSearches />
    </main>
  );
}
