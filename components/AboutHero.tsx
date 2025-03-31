"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Head from "next/head";

export default function AboutHero() {
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
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          I am a{" "}
          <span className="text-yellow-300 font-extrabold">
            <Typewriter
              words={[
                "Designer",
                "Dreamer",
                "Builder",
                "Tech Lover",
                "Creative",
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
          I specialize in building full-stack web applications that are fast,
          secure, and scalable. My stack includes React, Next.js, Django, and
          PostgreSQL, paired with a solid foundation in networking and system
          architecture. I’m passionate about building software that solves real
          problems with real performance.
        </p>
      </motion.section>
    </>
  );
}
