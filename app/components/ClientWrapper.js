"use client";

import { useState } from "react";
import Search from "./Search";
import PokemonCard from "./PokemonCard";
import StatsChart from "./StatsChart";

export default function ClientWrapper({ data }) {
  const [query, setQuery] = useState("");

  const filtered = data.filter((p) => p.name.includes(query));

  return (
    <>
      <Search onSearch={setQuery} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>

      {filtered.length === 1 && (
        <>
          <h3 className="text-xl font-semibold mt-6">Stats Chart</h3>
          <StatsChart pokemon={filtered[0]} />
        </>
      )}
    </>
  );
}