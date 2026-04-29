import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sasha Noire",
  description: "AI portrait artist. Bold. Raw. Beautiful.",
  openGraph: {
    title: "Sasha Noire",
    description: "AI portrait artist. Bold. Raw. Beautiful.",
    type: "website",
    url: "https://sashanoire.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasha Noire",
    description: "AI portrait artist. Bold. Raw. Beautiful.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
