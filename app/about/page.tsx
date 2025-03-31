"use client";

import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import TechStack from "@/components/TechStack";
import ProjectsGrid from "@/components/ProjectsGrid";
import CallToAction from "@/components/CallToAction";
import Head from "next/head";

export default function AboutPage() {
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
      <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white">
        <Header />
        <div className="px-6 sm:px-12 md:px-20 py-10 space-y-20">
          <AboutHero />
          <TechStack />
          <ProjectsGrid />
          <CallToAction />
        </div>
      </main>
    </>
  );
}
