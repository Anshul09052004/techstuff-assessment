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

  const fetchList = async (url) => {
    try {
      setLoading(true);
      const res = await getPokemonList(url);
      setData(res.results);
      setNext(res.next);
      setPrev(res.previous);
      setError("");
    } catch (err) {
      setError("Error loading Pokémon list");
    } finally {
      setLoading(false);
    }
  };

  const fetchDetails = async (url) => {
    try {
      setLoading(true);
      const res = await getPokemonDetails(url);
      setDetails(res);
      setSelected(res.name);
    } catch {
      setError("Error loading details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6">

      {/* LEFT */}
      <div className="w-full sm:w-1/2 border p-4 rounded">
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Pokémon Table
        </h2>

        <PokemonTable data={data} onClick={fetchDetails} />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mt-4">
          <p className="text-sm sm:text-base">Total: {data.length}</p>
          <Pagination next={next} prev={prev} onPageChange={fetchList} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full sm:w-1/2 border p-4 rounded">
        {details ? (
          <PokemonDetails details={details} />
        ) : (
          <p className="text-center sm:text-left text-sm sm:text-base">
            Select a Pokémon
          </p>
        )}
      </div>

    </div>
  );
}