export const getPokemonList = async (url) => {
  const apiUrl = url ? url : "https://pokeapi.co/api/v2/pokemon?limit=5";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon");
    }

    const data = await response.json();
    return data;

  } catch (err) {
    // console.log(err);
    throw err;
  }
};


export const getPokemonDetails = async (url) => {

  if (!url) return null;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch details");
    }

    const data = await response.json();
    return data;

  } catch (err) {
    // debugging ke liye
    // console.error(err);
    throw err;
  }
};