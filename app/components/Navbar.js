"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-red-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Pokémon Dashboard</h1>
      <div className="space-x-4">
        <Link
          href="/"
          className="hover:underline"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="hover:underline"
        >
          About
        </Link>
      </div>
    </nav>
  );
}