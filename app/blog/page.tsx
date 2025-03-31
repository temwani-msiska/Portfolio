'use client';

import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";

const posts = [
  {
    title: "How I Built My Portfolio with Next.js 14",
    slug: "nextjs-portfolio",
    description:
      "A breakdown of the tech stack, design system, and deployment workflow.",
    date: "March 2025",
  },
  {
    title: "React vs. Django: Best Practices for Full Stack Projects",
    slug: "react-vs-django",
    description:
      "Comparing the two and when to use each in full stack development.",
    date: "February 2025",
  },
];

export default function BlogPage() {
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
        <meta property="og:title" content="Temwani Msiska | Full Stack Developer" />
        <meta
          property="og:description"
          content="Building clean, scalable applications with React, Next.js, Django & Node."
        />
        <meta property="og:image" content="/Profile-Port.jpg" />
        <meta property="og:url" content="https://temwanimsiska.dev" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Temwani Msiska | Full Stack Developer" />
        <meta name="twitter:description" content="Experienced full stack developer based in Zambia — available for freelance or remote roles." />
        <meta name="twitter:image" content="/Profile-Port.jpg" />
        <meta property="og:see_also" content="https://github.com/temwani-msiska" />
        <meta property="og:see_also" content="https://www.linkedin.com/in/temwani-msiska-3640a827b/" />
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

      <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
        <Header />
        <div className="max-w-4xl mx-auto space-y-12 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Blog</h1>
            <p className="text-white/80 text-lg">
              Thoughts on code, design, career, and everything in between.
            </p>
          </div>

          <div className="space-y-10">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <div className="bg-white/10 border border-white/10 backdrop-blur rounded-lg p-6 hover:border-yellow-400 transition cursor-pointer">
                  <h2 className="text-2xl font-bold">{post.title}</h2>
                  <p className="text-white/80 mt-2">{post.description}</p>
                  <p className="text-yellow-200 text-sm mt-4">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
