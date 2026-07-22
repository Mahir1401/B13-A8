import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToastProvider from "@/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome to Haat",
  description: "Buy your cow from here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <ToastProvider>
          <Navbar />
          <main className="flex-1 bg-yellow-900">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
