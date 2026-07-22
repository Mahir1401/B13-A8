"use client";

import { useMemo, useState } from "react";
import animals from "@/data/animals.json";
import AnimalCard from "@/components/AnimalCard";
import { ArrowUpDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "default", label: "Newest listed" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const AllAnimalsPage = () => {
  const [sortBy, setSortBy] = useState("default");

  const sortedAnimals = useMemo(() => {
    const list = [...animals];
    if (sortBy === "price-asc") return list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") return list.sort((a, b) => b.price - a.price);
    return list;
  }, [sortBy]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-oxblood">
            The full haat
          </p>
          <h1 className="mt-2 text-3xl">All Animals</h1>
          <p className="mt-2 text-sm text-ink/60">
            {animals.length} animals currently listed by verified farmers.
          </p>
        </div>

        <label className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5">
          <ArrowUpDown size={14} className="text-ink/50" />
          <span className="text-xs uppercase tracking-widest text-ink/50">
            Sort
          </span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="bg-transparent text-sm outline-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="ledger-rule my-8" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
};

export default AllAnimalsPage;
