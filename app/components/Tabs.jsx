import { useState } from "react";

export default function Tabs(props) {

  const types = props.types || [];
  const movesCount = props.movesCount;
  const gameCount = props.gameCount;

  // first type ko default rakh rahe hain (agar available ho)
  const [active, setActive] = useState(types.length ? types[0] : null);

  return (
    <div>

      <div className="flex border-b mb-4">
        {types.map((item, i) => {

          const isActive = active === item;

          return (
            <button
              key={i}
              onClick={() => setActive(item)}
              className={
                "px-4 py-2 " +
                (isActive
                  ? "bg-gray-300 font-bold"
                  : "bg-gray-100")
              }
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="border p-7 mb-4">
        <p>
          <b>Game Indices count:</b> {gameCount}
        </p>

        <p>
          <b>Total moves count:</b> {movesCount}
        </p>
      </div>

    </div>
  );
}