import Link from "next/link";
import animals from "@/data/animals.json";
// import AnimalCard from "@/components/AnimalCard";
import Hero from "@/components/Hero";
import { ScrollText, Scale, ShieldCheck, ArrowRight } from "lucide-react";

const TIPS = [
  {
    title: "Check the teeth, not just the tag",
    body: "Age is usually visible in the front teeth. For cows, look for two permanent incisors as a sign of maturity.",
  },
  {
    title: "Ask for the feeding history",
    body: "A farmer who can describe exactly what an animal ate will usually have raised it with more care.",
  },
  {
    title: "Weight is an estimate, not a promise",
    body: "Live weight and meat yield differ. Use the listed weight to compare animals, not as a guaranteed cut count.",
  },
  {
    title: "Book early in Zilhaj",
    body: "Prices and good stock move fastest in the final ten days before Eid. Booking early protects both price and choice.",
  },
];

const BREEDS = [
  { name: "Deshi", type: "Cow", note: "Compact, low-fat, and well suited to smaller shares." },
  { name: "Sahiwal", type: "Cow", note: "A dairy-hardy breed prized for steady weight gain." },
  { name: "Black Bengal", type: "Goat", note: "Small-framed with notably tender meat." },
  { name: "Murrah", type: "Buffalo", note: "Dense muscle, calm temperament, large shares." },
];

import React from 'react';

const HomePage = () => {
  const featured = animals.slice(0, 4);
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-oxblood">
              This week’s listings
            </p>
            <h2 className="mt-2 text-3xl">Featured Animals</h2>
          </div>
          <Link
            href="/animals"
            className="hidden text-sm uppercase tracking-wide text-ink/60 hover:text-oxblood sm:block"
          >
            <div className="flex justify-center items-center gap-2">
            See all <ArrowRight></ArrowRight>
            </div>
          </Link>
        </div>

        <div className="ledger-rule my-8" />

        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div> */}
      </section>

      <section className="bg-hide-soft/5">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs uppercase tracking-widest text-oxblood">
            Before you book
          </p>
          <h2 className="mt-2 text-3xl">Qurbani Tips</h2>
          <div className="ledger-rule my-8" />

          <div className="grid gap-8 md:grid-cols-2 animate__animated animate__slideInUp">
            {TIPS.map((tip, index) => (
              <div key={tip.title} className="flex gap-4">
                <span className="text-sm text-brass shrink-0 pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg">{tip.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs uppercase tracking-widest text-oxblood">
          Know your animal
        </p>
        <h2 className="mt-2 text-3xl">Top Breeds</h2>
        <div className="ledger-rule my-8" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BREEDS.map((breed) => (
            <div
              key={breed.name}
              className="rounded-xl border bg-white/40 p-5"
            >
              <p className="text-[10px] uppercase tracking-widest">
                {breed.type}
              </p>
              <h3 className="mt-1 text-xl">{breed.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{breed.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 rounded-2xl border border-ink/10 bg-pasture/5 p-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-pasture shrink-0" size={22} />
            <p className="text-sm text-ink/70">
              Every listed farmer is verified before their animals go live.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Scale className="text-pasture shrink-0" size={22} />
            <p className="text-sm text-ink/70">
              Weights are recorded at the farm scale, not estimated by eye.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ScrollText className="text-pasture shrink-0" size={22} />
            <p className="text-sm text-ink/70">
              Booking details are confirmed directly between you and the farmer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;


