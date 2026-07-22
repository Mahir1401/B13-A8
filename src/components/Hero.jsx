"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-hero-cow bg-cover py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase bg-green-700 inline-block rounded-3xl px-3 py-1.5 font-semibold">
            Eid-ul-Adha, booking now open
          </p>
          
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl animate__animated animate__swing">
            Choose your Qurbani animal like you’re standing at the haat.
          </h1>
          
          <p className="mt-6 bg-yellow-900 inline-block rounded-3xl px-3 py-1.5 font-semibold max-w-md text-sm">
            Real weight, real breed, real farmer. Browse verified livestock and book with confidence before the crowd does.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link 
              href="/animals" 
              className="border-4 border-green-700 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs uppercase tracking-widest font-semibold"
            >
              Browse the Haat 
              <ArrowRight size={14} />
            </Link>
            <span className="px-6 py-3 border-4 rounded-full border-green-700 text-xs uppercase tracking-widest font-semibold">
              8 animals listed today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
