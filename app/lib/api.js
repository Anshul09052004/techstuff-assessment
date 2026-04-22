export const getPokemonList = async (url) => {
    const res = await fetch(url || "https://pokeapi.co/api/v2/pokemon?limit=5");
    if (!res.ok) throw new Error("Failed to fetch Pokémon");
    return res.json();
};

export const getPokemonDetails = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch details");
    return res.json();
};