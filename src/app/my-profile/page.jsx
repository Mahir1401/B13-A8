"use client";

import Link from "next/link";
import { Pencil, Mail } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfileContent = () => {
  const router = useRouter();
  const { data } = useSession();
  const user = data?.user;

  useEffect(() => {
    router.refresh();
  }, [router]);

  if (!user) {
    return (
      <section className="mx-auto max-w-lg px-5 py-20 text-center">
        <p>Loading profile...</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-lg px-5 py-20">
      <p className="text-xs uppercase tracking-widest text-oxblood">
        Your account
      </p>
      <h1 className="mt-2 text-3xl">My Profile</h1>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-white/40 p-8 text-center">
        {user?.image && (
          <Image
            src={user.image}
            alt={user.name || "User Avatar"}
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover border mx-auto"
          />
        )}
        <h2 className="mt-4 text-2xl">{user?.name}</h2>
        <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-ink/60">
          <Mail size={14} /> {user?.email}
        </p>

        <Link
          href="/my-profile/update"
          className="mt-6 btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs uppercase tracking-widest"
        >
          <Pencil size={14} /> Update Information
        </Link>
      </div>
    </section>
  );
};

export default ProfileContent;
