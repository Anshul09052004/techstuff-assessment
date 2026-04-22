"use client";

import { useEffect, useState } from "react";
import { getPokemonList, getPokemonDetails } from "../lib/api";
import PokemonTable from "../components/PokemonTable";
import Pagination from "../components/Pagination";
import PokemonDetails from "../components/PokemonDetails";

export default function Page() {

  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  const [selected, setSelected] = useState(null);
  const [details, setDetails] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // list fetch karne ke liye
  const fetchList = async (url) => {
    setLoading(true);

    try {
      const response = await getPokemonList(url);

      if (response) {
        setData(response.results || []);
        setNext(response.next);
        setPrev(response.previous);
      }

      setError("");
    } catch (e) {
      // console.error(e);
      setError("Error loading Pokémon list");
    }

    setLoading(false);
  };

  // details fetch
  const fetchDetails = async (url) => {
    if (!url) return;

    setLoading(true);

    try {
      const res = await getPokemonDetails(url);

      setDetails(res);
      setSelected(res?.name);
    } catch (e) {
      setError("Error loading details");
    }

    setLoading(false);
  };

  useEffect(() => {
    // initial load
    fetchList();
  }, []);

  return (
    <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6">

      {/* LEFT SIDE */}
      <div className="w-full sm:w-1/2 border p-4 rounded">
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Pokémon Table
        </h2>

        <PokemonTable
          data={data}
          onClick={fetchDetails}
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mt-4">
          <p className="text-sm sm:text-base">
            Total: {data ? data.length : 0}
          </p>

          <Pagination
            next={next}
            prev={prev}
            onPageChange={fetchList}
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full sm:w-1/2 border p-4 rounded">

        {details ? (
          <PokemonDetails details={details} />
        ) : (
          <p className="text-center sm:text-left text-sm sm:text-base">
            Select a Pokémon
          </p>
        )}

        {/* future: loading ya error dikha sakte hain */}
        {loading && (
          <p className="text-xs mt-2">Loading...</p>
        )}

        {error && (
          <p className="text-xs text-red-500 mt-2">
            {error}
          </p>
        )}

      </div>

    </div>
  );
}