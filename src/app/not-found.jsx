import Link from "next/link";
import { X } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <div className="hero-content flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="text-error w-16 pl-2.5">
            <X size={50} />
          </div>
          <h1 className="text-5xl font-black text-green-600 tracking-tight">
            404
          </h1>
        </div>
        <p className="text-xl font-semibold max-w-sm mt-2">
          The page you are looking for does not exist, or it moved.
        </p>

        <Link
          href="/"
          className="btn bg-green-600 btn-wide rounded-full mt-6 gap-2"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
