import { Phone, Mail, MapPin, Copyright } from "lucide-react";

const SOCIALS = ["Facebook", "Instagram", "YouTube"];

import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t bg-amber-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl">
            QurbaniHat
          </h3>
          <p className="mt-3 max-w-xs text-sm">
            A digital haat connecting trusted farmers directly with families,
            so every Qurbani animal is chosen with confidence and care.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16}/> +880 1XXX-XXXXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16}/> qurbanihat@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16}/> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase">
            About & Social
          </p>
          <div className="mt-4 flex gap-2">
            {SOCIALS.map((social) => (
              <button
                key={social}
                className="rounded-full border px-3 py-1 text-xs uppercase cursor-pointer"
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="flex justify-center gap-3 font-semibold items-center px-5 py-5 text-center text-md uppercase">
        <Copyright></Copyright>2026 QurbaniHat
      </p>
    </footer>
  );
};

export default Footer;
