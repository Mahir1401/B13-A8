'use client'

import Link from "next/link";
import Image from "next/image";


const AnimalCard = ({ animal }) => {
  
  return (
    <div className="card bg-amber-800 border rounded-3xl border-amber-950 shadow-md">
      <figure className="relative h-48 w-full bg-base-300">
        {animal.image && (
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <span className="badge badge-neutral absolute left-3 top-3 uppercase tracking-widest text-[10px]">
          {animal.type}
        </span>
      </figure>

      <div className="card-body p-5 gap-3">
        <div>
          <h3 className="card-title text-lg">
            {animal.name}
          </h3>
          <p className="text-xs uppercase opacity-50">
            {animal.breed} | {animal.location}
          </p>
        </div>

        <p className="line-clamp-2 text-sm opacity-70">
          {animal.description}
        </p>

        <div className="flex gap-2 pt-2 mt-auto">
          <span className="flex flex-col gap-1.5 px-3 py-1 ml-2">
            <span className="text-sm uppercase font-semibold">
              Price: {animal.price}
            </span>
            <span className="text-sm font-semibold">Weight: {animal.weight}</span>
          </span>
        </div>

        <div className="card-actions mt-2">
          <Link
            href={`/animals/${animal.id}`}
            className="btn btn-neutral btn-block rounded-full min-h-0 h-10 text-xs uppercase tracking-widest"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
