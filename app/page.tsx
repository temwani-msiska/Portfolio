"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import profilePic from "../public/Profile-Port.jpg";
import logo from "../public/Logo_Final.png";
import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, 60]);

  return (
    <>
      <Head>
        <title>Temwani Msiska | Full Stack Developer from Zambia</title>
        <meta
          name="description"
          content="Temwani Msiska is a full stack developer specializing in React, Next.js, Django & Node. Based in Zambia and open to remote work."
        />
        <meta
          name="keywords"
          content="Temwani Msiska, full stack developer, React, Next.js, Django, Node, Zambia developer, remote developer"
        />
        <meta name="author" content="Temwani Msiska" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Temwani Msiska | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Building clean, scalable applications with React, Next.js, Django & Node."
        />
        <meta property="og:image" content="/Profile-Port.jpg" />
        <meta property="og:url" content="https://temwanimsiska.dev" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Temwani Msiska | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Experienced full stack developer based in Zambia — available for freelance or remote roles."
        />
        <meta name="twitter:image" content="/Profile-Port.jpg" />
        <meta
          property="og:see_also"
          content="https://github.com/temwani-msiska"
        />
        <meta
          property="og:see_also"
          content="https://www.linkedin.com/in/temwani-msiska-3640a827b/"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Temwani Msiska",
              url: "https://temwanimsiska.dev",
              image: "https://temwanimsiska.dev/Profile-Port.jpg",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "SMART Zambia",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lusaka",
                addressCountry: "ZM",
              },
              sameAs: [
                "https://github.com/temwani-msiska/",
                "https://www.linkedin.com/in/temwani-msiska-3640a827b/",
              ],
            }),
          }}
        />
      </Head>

      <main className="min-h-screen flex flex-col text-white px-4 sm:px-6 md:px-12 pt-2 sm:pt-4 bg-gradient-to-tl from-[#db8805] to-yellow-500">
        {/* Header */}
        <header className="w-full max-w-7xl mx-auto sticky top-0 z-50 flex justify-between items-center bg-transparent py-2 sm:py-3">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.04, 1], rotate: [0, 1.5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full "
          >
            <Image
              src={logo}
              alt="Temwani Msiska Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden sm:flex space-x-6 md:space-x-8 text-sm md:text-base font-semibold tracking-wide">
            {["About", "Projects", "Blog", "Contact"].map((text) => (
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
              {["About", "Projects", "Blog", "Contact"].map((text) => (
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-serif leading-snug">
              Hi, I’m <span className="text-yellow-300">Temwani</span> 👋🏿
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed font-serif text-[--color-foreground] dark:text-[--color-foreground]">
              I’m a{" "}
              <span className="font-bold text-[--color-primary] dark:text-[--color-primary]">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "Designer",
                    "Dreamer",
                    "Builder",
                    "Tech Lover",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>{" "}
              based in Zambia — available remotely.
            </p>
            <p className="text-sm italic mb-6 text-yellow-100 font-serif">
              Currently open for freelance or remote full-time roles.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-yellow-700 transition-colors duration-300"
                onClick={() =>
                  (window.location.href = "mailto:temwani.msiska@gmail.com")
                }
              >
                Email
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-yellow-700 transition-colors duration-300"
                onClick={() =>
                  window.open("https://github.com/temwani-msiska/", "_blank")
                }
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-yellow-700 transition-colors duration-300"
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
            style={{ y: yOffset }}
            animate={{ rotate: [15, 12, 15] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "circInOut",
            }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-60 sm:w-72 md:w-80 lg:w-[24rem] aspect-square rounded-full border-4 border-white overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-yellow-300 before:to-yellow-500 before:blur-2xl before:opacity-40">
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
    </>
  );
}
