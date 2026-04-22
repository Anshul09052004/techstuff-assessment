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
        <div className="p-6 flex gap-6">

            {/* LEFT */}
            <div className="w-1/2 border p-4 rounded">
                <h2 className="text-xl font-bold mb-4">Pokémon Table</h2>

                <PokemonTable data={data} onClick={fetchDetails} />

                <div className="flex justify-between mt-4">
                    <p>Total: {data.length}</p>
                    <Pagination next={next} prev={prev} onPageChange={fetchList} />
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-1/2 border p-4 rounded">
                {details ? (
                    <PokemonDetails details={details} />
                ) : (
                    <p>Select a Pokémon</p>
                )}
            </div>

        </div>
    );
}