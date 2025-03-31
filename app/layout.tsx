// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load custom fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Temwani Msiska | Full Stack Developer",
    template: "%s | Temwani Msiska",
  },
  description:
    "Temwani Msiska is a seasoned full stack developer based in Zambia, crafting clean and scalable web and mobile applications using React, Next.js, Django, and Node.js.",
  keywords: [
    "Temwani Msiska",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Remote Developer",
    "Zambia Developer",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Temwani Msiska", url: "https://temwanimsiska.dev" }],
  creator: "Temwani Msiska",
  metadataBase: new URL("https://temwanimsiska.dev"),
  openGraph: {
    title: "Temwani Msiska | Full Stack Developer",
    description:
      "Experienced full stack developer building modern web and mobile apps with React, Next.js, Django, and Node.",
    url: "https://temwanimsiska.dev",
    siteName: "Temwani Msiska Portfolio",
    images: [
      {
        url: "/Profile-Port.jpg",
        width: 1200,
        height: 630,
        alt: "Temwani Msiska - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temwani Msiska | Full Stack Developer",
    description:
      "Clean, scalable apps. Based in Zambia, available for freelance or remote work.",
    images: ["/Profile-Port.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
