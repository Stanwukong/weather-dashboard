import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather Dashboard",
  description: "Check the current weather in any city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} pt-3 h-screen bg-gray-300 antialiased`}
      >
        <div className="flex flex-col max-w-4xl mx-auto relative bg-gray-300">
          <h1 className="text-3xl font-bold text-black text-center mb-8">
            Weather Dashboard
          </h1>
          <SearchBar />
        </div>

        {children}
      </body>
    </html>
  );
}
