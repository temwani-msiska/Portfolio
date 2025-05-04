'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
  external?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  link = '#',
  external = false,
}: ProjectCardProps) {
  const Wrapper = external ? 'a' : Link;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col w-full max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-yellow-500 transition"
    >
      <Wrapper
        {...(external
          ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
          : { href: link })}
        className="flex flex-col h-full"
      >
        {/* Optimized Image Container */}
        <div className="relative w-full h-60 sm:h-64 md:h-72 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <h3 className="text-white text-xl font-bold">
            {title}
            {external && (
              <span className="ml-2 inline-block text-yellow-400">↗</span>
            )}
          </h3>
          <p className="text-white/80 text-sm mt-2 flex-grow">
            {description}
          </p>
          <span className="inline-block mt-4 text-yellow-400 font-medium text-sm group-hover:underline">
            View Project →
          </span>
        </div>
      </Wrapper>
    </motion.div>
  );
}
