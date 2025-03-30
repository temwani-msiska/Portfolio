'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import profilePic from "../public/Profile-Port.jpg";
import logo from "../public/White_Logo_Transparent.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12 flex flex-col items-center scroll-smooth">
      
      {/* Navigation */}
      <header className="w-full max-w-6xl sticky top-0 z-50 flex justify-between items-center bg-transparent py-6 backdrop-blur-md ">
        {/* Logo */}
        <div className="w-40 h-40 relative">
          <Image
            src={logo}
            alt="Temwani Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Nav Links */}
        <nav className="space-x-8 text-sm md:text-base font-semibold text-white tracking-wide">
          <a href="#about" className="hover:text-yellow-100 hover:underline underline-offset-4 transition">About</a>
          <a href="#projects" className="hover:text-yellow-100 hover:underline underline-offset-4 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-100 hover:underline underline-offset-4 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 py-12">
        
        {/* Text Column - Animated */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 basis-1/2 text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Hello, I’m Temwa 👋🏿</h1>

          <p className="text-base md:text-lg mb-4 leading-relaxed md:leading-loose text-white">
            I’m a full stack developer building clean, scalable applications
            with React, Next.js, Django & Node. Based in Zambia — available remotely.
          </p>

          <p className="text-sm italic mb-6 text-yellow-100">
            Currently open for freelance or remote full-time roles.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-700 w-full sm:w-auto"
              onClick={() => (window.location.href = 'mailto:temwani.msiska@gmail.com')} aria-label="Send Email">
              Email
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-700 w-full sm:w-auto"
              onClick={() => window.open('https://github.com/temwani-msiska/', '_blank')} aria-label="Visit GitHub">
              GitHub
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-700 w-full sm:w-auto"
              onClick={() => window.open('https://www.linkedin.com/in/temwani-msiska-3640a827b/', '_blank')} aria-label="Visit LinkedIn">
              LinkedIn
            </Button>
          </div>
        </motion.div>

        {/* Profile Image - Animated */}
        <motion.div
          initial={{ opacity: 0, rotate: 5, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 15, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 basis-1/2 flex justify-center"
        >
          <div className="relative w-80 md:w-[28rem] lg:w-[32rem] aspect-square rounded-full border-4 border-white overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-yellow-300 before:to-yellow-500 before:blur-2xl before:opacity-40">
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
