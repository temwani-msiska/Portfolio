'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '../public/Logo_Final.png';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['About', 'Projects', 'Blog', 'Contact'];

  return (
    <>
      <header className="w-full max-w-7xl mx-auto sticky top-0 z-50 flex justify-between items-center bg-transparent py-2 sm:py-3 px-4 sm:px-6 md:px-12">
        <motion.a
          href="/"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.04, 1], rotate: [0, 1.5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2,
            ease: 'easeInOut',
          }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full"
        >
          <Image
            src={logo}
            alt="Temwani Msiska Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6 md:space-x-8 text-sm md:text-base font-semibold tracking-wide">
          {navItems.map((text) => (
            <a
              key={text}
              href={`/${text.toLowerCase()}`}
              className="hover:text-yellow-300 hover:underline underline-offset-4 transition duration-200 ease-in-out"
            >
              {text}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
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
            {navItems.map((text) => (
              <a
                key={text}
                href={`/${text.toLowerCase()}`}
                className="block hover:text-yellow-300 hover:underline underline-offset-4"
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
