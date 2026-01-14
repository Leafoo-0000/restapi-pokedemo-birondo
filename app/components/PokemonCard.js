"use client";
import { useState } from "react";

export default function PokemonCard({ pokemon }) {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className="border rounded shadow p-4 bg-white">
      <img src={pokemon.sprites.front_default} className="h-24 mx-auto" />
      
      <h3 className="text-lg font-semibold text-center capitalize">
        {pokemon.name}
      </h3>
      
      <p className="text-center text-sm">
        Type: {pokemon.types.map(t => t.type.name).join(", ")}
      </p>

      <button
        onClick={() => setShowStats(!showStats)}
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded w-full"
      >
        {showStats ? "Hide Stats" : "Show Stats"}
      </button>

      {showStats && (
        <ul className="mt-2 text-sm">
          {pokemon.stats.map((s) => (
            <li key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}