import { useState } from "react";

export default function Tabs({ types, movesCount, gameCount }) {
    const [active, setActive] = useState(types[0]);

    return (
        <div>
            <div className="flex border-b mb-4">
                {types.map((t) => (
                    <button
                        key={t}
                        onClick={() => setActive(t)}
                        className={`px-4 py-2 ${active === t
                                ? "bg-gray-300 font-bold"
                                : "bg-gray-100"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="border p-7 mb-4">
                <p><b>Game Indices count:</b> {gameCount}</p>
                <p><b>Total moves count:</b> {movesCount}</p>

            </div>
        </div>
    );
}