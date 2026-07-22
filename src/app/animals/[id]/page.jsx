"use client";

import BookingForm from "@/components/BookingForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import animals from "@/data/animals.json";
import AnimalDetailsCard from "@/components/AnimalDetailsCard";


const AnimalDetailsPage = () => {
  const params = useParams();
  const animal = animals.find((item) => String(item.id) === String(params.id));
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <Link
        href="/animals"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Back to all animals
      </Link>
      <div className="flex justify-center items-center gap-4">
        <AnimalDetailsCard animal={animal}></AnimalDetailsCard>
        <BookingForm></BookingForm>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;

