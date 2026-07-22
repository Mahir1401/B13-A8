"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, PawPrint } from "lucide-react";
import { toast } from "react-toastify";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/animals", label: "All Animals" },
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data, isPending } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const user = data?.user;

  function handleLogout() {
    signOut();
    toast.success("Signed out. See you again soon.");
    router.push("/");
  }
  return (
    <header className="sticky top-0 z-40 border-b bg-amber-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full">
            <PawPrint size={18} />
          </span>
          <span className="text-xl tracking-tight">
            QurbaniHat
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase font-semibold tracking-wide transition-colors ${pathname === link.href ? "text-green-600" : "text-gray-300"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isPending ? null : user ? (
            <>
              <Link
                href="/my-profile"
                className="flex items-center gap-2 rounded-full border px-2 py-1 pr-4"
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover border"
                />
                <span className="text-xs uppercase tracking-wide">
                  {user.name?.split(" ")[0] || "Profile"}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-xs uppercase tracking-wide cursor-pointer"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="text-sm uppercase tracking-wide"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-full px-5 py-2 text-sm uppercase tracking-wide"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-ink/10 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <div className="ledger-rule my-2" />
            {isPending ? null : user ? (
              <>
                <Link
                  href="/my-profile"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-wide"
                >
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                  className="text-left cursor-pointer text-sm uppercase tracking-wide"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-wide"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-wide"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;




