import { MapPin } from "lucide-react";
import Image from "next/image";

const AnimalDetailsCard = ({ animal }) => {
  return (
    <div className="card bg-[#121212] text-white rounded-2xl border-none shadow-xl max-w-4xl">
      <figure className="relative h-64 w-full bg-[#1e1e1e] rounded-t-2xl flex items-center justify-center">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover rounded-t-2xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
      </figure>

      <div className="card-body p-5 gap-4">
        <span className="text-orange-600 font-bold text-xs uppercase tracking-wider">
          {animal.type}
        </span>

        <div className="-mt-2">
          <h3 className="card-title text-2xl font-extrabold tracking-tight text-white">
            {animal.name}
          </h3>
          <p className="text-sm opacity-70 flex items-center gap-1 mt-1 font-medium">
            <MapPin></MapPin>
            {animal.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 my-1">
          <span className="bg-[#fee2e2] text-[#991b1b] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#fca5a5]">
            Price: {animal.price}
          </span>
          <span className="bg-[#fef3c7] text-[#92400e] text-xs font-semibold px-3 py-1.5 rounded-lg">
            Weight: {animal.weight}
          </span>
          <span className="bg-[#f0fdf4] text-[#166534] text-xs font-semibold px-3 py-1.5 rounded-lg">
            Age: {animal.age}
          </span>
          <span className="bg-[#eff6ff] text-[#1e40af] text-xs font-semibold px-3 py-1.5 rounded-lg">
            Breed: {animal.breed}
          </span>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed font-light">
          {animal.description}
        </p>
      </div>
    </div>
  );
};

export default AnimalDetailsCard;
