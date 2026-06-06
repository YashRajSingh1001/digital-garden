import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Yash Raj Singh",
  description: "A digital garden — writings, projects, and things I'm working on.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashraj.dev",
    siteName: "Yash Raj Singh",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-[#080b14] text-[#e2e8f8] font-sans">
        <Nav />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
