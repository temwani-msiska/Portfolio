'use client';

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import profilePic from "../public/Profile-Port.jpg";
import logo from "../public/Logo_Final.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="h-screen overflow-hidden flex flex-col text-white px-4 sm:px-6 md:px-12 pt-2 sm:pt-4 bg-gradient-to-tl from-[#db8805] to-yellow-500">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto sticky top-0 z-50 flex justify-between items-center bg-transparent py-2 sm:py-3">
        {/* Logo */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative">
          <Image
            src={logo}
            alt="Temwani Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden sm:flex space-x-6 md:space-x-8 text-sm md:text-base font-semibold tracking-wide">
          {["About", "Projects", "Contact"].map((text) => (
            <a
              key={text}
              href={`#${text.toLowerCase()}`}
              className="hover:text-yellow-300 hover:underline underline-offset-4 transition duration-200 ease-in-out"
            >
              {text}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden w-full max-w-7xl mx-auto px-4 pt-2 pb-4 text-center font-semibold text-base space-y-4"
          >
            {["About", "Projects", "Contact"].map((text) => (
              <a
                key={text}
                href={`#${text.toLowerCase()}`}
                className="block hover:text-yellow-300 hover:underline underline-offset-4"
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="flex-grow w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-4 sm:py-6">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hello, I’m Temwa 👋🏿
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-white">
            I’m a full stack developer building clean, scalable applications
            with React, Next.js, Django & Node. Based in Zambia — available
            remotely.
          </p>

          <p className="text-sm italic mb-6 text-yellow-100">
            Currently open for freelance or remote full-time roles.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <Button
              variant="outline"
              className="border-white text-white hover:!bg-yellow-300 hover:!text-gray-900 hover:scale-105 transition-transform transition-colors"
              onClick={() =>
                (window.location.href = "mailto:temwani.msiska@gmail.com")
              }
            >
              Email
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:!bg-yellow-300 hover:!text-gray-900 hover:scale-105 transition-transform transition-colors"
              onClick={() =>
                window.open("https://github.com/temwani-msiska/", "_blank")
              }
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:!bg-yellow-300 hover:!text-gray-900 hover:scale-105 transition-transform transition-colors"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/temwani-msiska-3640a827b/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </Button>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          animate={{ rotate: [15, 12, 15] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "circInOut",
          }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-60 sm:w-72 md:w-80 lg:w-[25rem] aspect-square rounded-full border-4 border-white overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-yellow-300 before:to-yellow-500 before:blur-2xl before:opacity-40">
            <Image
              src={profilePic}
              alt="Temwani Profile Picture"
              fill
              sizes="(max-width: 768px) 16rem, (max-width: 1024px) 24rem, 32rem"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
