import Tabs from "./Tabs";

export default function PokemonDetails({ details }) {
    const types = details.types.map((t) => t.type.name);
    const movesCount = details.moves.length;
    const gameCount = details.game_indices.length;

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