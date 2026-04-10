"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getImages, categories } from "@/lib/images";

export default function GalleryPage() {
  const [active, setActive] = useState<string | undefined>(undefined);
  const images = getImages(active);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Sasha <span className="text-accent">Noire</span>
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/links" className="text-white/60 hover:text-accent transition-colors">Links</Link>
            <Link href="/premium" className="text-white/60 hover:text-accent transition-colors">Premium</Link>
          </nav>
        </div>
      </header>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActive(undefined)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === undefined
                ? "bg-accent text-black"
                : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                active === cat
                  ? "bg-accent text-black"
                  : "bg-white/5 text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img) => (
            <div
              key={img.file}
              className="break-inside-avoid group relative overflow-hidden rounded-xl"
            >
              <Image
                src={img.url}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-medium text-white/80 capitalize bg-black/40 px-2 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 mt-16 border-t border-white/10 text-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} Sasha Noire. All rights reserved.</p>
      </footer>
    </main>
  );
}
