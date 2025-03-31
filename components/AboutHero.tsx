'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6 max-w-4xl mx-auto"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Hi, I’m Temwani — and I am a {' '}
        <span className="text-yellow-300 font-extrabold">
          <Typewriter
            words={[
              'Designer',
              'Dreamer',
              'Builder',
              'Tech Lover',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
        I build powerful, scalable web apps using modern frameworks like React,
        Next.js, Django, and PostgreSQL. With a strong foundation in networking
        and a passion for design, I bring ideas to life with code.
      </p>
    </motion.section>
  );
}
