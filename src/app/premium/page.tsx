import Image from "next/image";
import Link from "next/link";
import { getImages } from "@/lib/images";
import NotifyForm from "./notify-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium | Sasha Noire",
  description: "Exclusive content from Sasha Noire.",
};

export default function PremiumPage() {
  const previewImages = getImages("fashion").slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Sasha <span className="text-accent">Noire</span>
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/gallery" className="text-white/60 hover:text-accent transition-colors">Gallery</Link>
            <Link href="/links" className="text-white/60 hover:text-accent transition-colors">Links</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <span>&#11088;</span> Coming Soon
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          The <span className="text-accent">Unfiltered</span> Collection
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
          Behind-the-scenes content, exclusive photo sets, and the real moments
          that never make the feed. Raw, intimate, unapologetic.
        </p>

        {/* Preview grid with blur overlay */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {previewImages.map((img) => (
            <div key={img.file} className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover blur-sm scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-md mx-auto">
          <p className="text-white/40 text-sm mb-6">
            Be the first to know when premium drops.
          </p>
          <NotifyForm />
        </div>
      </section>

      {/* What to expect */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-bold text-center mb-10">What to expect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-3xl mb-3">&#128247;</div>
            <h3 className="font-semibold mb-2">Exclusive Sets</h3>
            <p className="text-sm text-white/50">Full photo sets you won&apos;t find on Instagram.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3">&#127916;</div>
            <h3 className="font-semibold mb-2">Behind the Scenes</h3>
            <p className="text-sm text-white/50">Raw footage and the stories behind each shoot.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3">&#128172;</div>
            <h3 className="font-semibold mb-2">Direct Access</h3>
            <p className="text-sm text-white/50">Polls, Q&amp;A, and content you help create.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10 text-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} Sasha Noire. All rights reserved.</p>
      </footer>
    </main>
  );
}
