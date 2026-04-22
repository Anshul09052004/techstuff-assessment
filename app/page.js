import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">

      <h1 className="text-xl font-semibold text-center">
        This is a Techstuff Assessment R-02 of Pokémon Data Explorer
      </h1>

      {/* Button */}
      <Link href="/poke">
        <button className="px-4 py-2 border bg-slate-200 hover:bg-gray-100">
          Go to Pokemon Page
        </button>
      </Link>

    </div>
  );
}