"use client";
import { useState } from "react";
import { TYPE_COLORS } from "@/app/components/typeColors";

/**
 * PokemonCard
 * - Reads types from PokeAPI-shaped pokemon object (pokemon.types is an array of { type: { name } }).
 * - Applies a single-color border for mono-type or a two-color gradient border for dual-type.
 * - Colors the small type badges using the same map.
 */
export default function PokemonCard({ pokemon }) {
  const [showStats, setShowStats] = useState(false);

  // Normalize types to an array of plain strings: ['grass','poison']
  const types = Array.isArray(pokemon.types)
    ? pokemon.types.map((t) => (t?.type ? t.type.name : t))
    : [];

  const primaryType = types[0] || "unknown";
  const secondaryType = types[1] || primaryType;

  const primaryColor = TYPE_COLORS[primaryType] || "#777";
  const secondaryColor = TYPE_COLORS[secondaryType] || primaryColor;

  // Inline card style: border-image for gradient, borderColor fallback for older browsers.
  const cardStyle = {
    borderStyle: "solid",
    borderWidth: "4px",
    borderRadius: "0.5rem",
    borderImage: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor}) 1`,
    borderColor: primaryColor,
    overflow: "hidden"
  };

  // Simple text color chooser for badges (black on light colors, white on dark).
  function badgeTextColor(hex) {
    if (!hex) return "#fff";
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#000" : "#fff";
  }

  return (
    <div className="rounded shadow p-4 bg-white" style={cardStyle}>
      <img
        src={pokemon.sprites?.front_default}
        className="h-24 mx-auto"
        alt={pokemon.name}
      />

      <h3 className="text-lg font-semibold text-center capitalize">
        {pokemon.name}
      </h3>

      <p className="text-center text-sm">
        Type:{" "}
        {types.map((t, i) => (
          <span
            key={t + i}
            className="inline-block px-2 py-0.5 mr-1 rounded-full text-sm capitalize"
            style={{
              backgroundColor: TYPE_COLORS[t] || "#999",
              color: badgeTextColor(TYPE_COLORS[t] || "#999"),
              fontWeight: 600
            }}
          >
            {t}
          </span>
        ))}
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