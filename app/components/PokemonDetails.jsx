import Tabs from "./Tabs";

export default function PokemonDetails(props) {
  const details = props.details;

  // extract useful data
  const types = details?.types?.map((item) => item.type.name);
  const movesCount = details?.moves ? details.moves.length : 0;
  const gameCount = details?.game_indices?.length || 0;

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 capitalize">
        Pokémon Types ({details.name})
      </h2>

      <Tabs
        types={types}
        movesCount={movesCount}
        gameCount={gameCount}
      />
    </div>
  );
}