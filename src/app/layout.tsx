import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JN - Modern Product Landing Page",
  description: "A premium, motion-driven product landing page built with Next.js, Framer Motion, and Tailwind CSS. Features immersive animations and seamless checkout.",
  keywords: ["JN", "Next.js", "TypeScript", "Tailwind CSS", "landing page", "product showcase", "React"],
  authors: [{ name: "JN" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "JN - Modern Product Landing Page",
    description: "Premium motion-driven product landing page with immersive animations and interactive showcase",
    siteName: "JN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JN - Modern Product Landing Page",
    description: "Premium motion-driven product landing page with immersive animations and interactive showcase",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
