"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full bg-gray-900 text-white py-3 px-6 flex gap-4">
      <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
      <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
    </nav>
  );
}