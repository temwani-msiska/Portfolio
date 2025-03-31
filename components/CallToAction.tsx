"use client";
import Head from "next/head";
export default function CallToAction() {
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
      <section className="w-full flex justify-center px-4">
        <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6 max-w-2xl border border-white/20 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let’s Work Together
          </h2>

          <p className="text-white/80 text-lg">
            Open to freelance projects, contract roles, or collabs. If my vibe
            matches your vision, let’s connect.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:contact@temwanimsiska.dev"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Send Me a Message
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-yellow-500 text-yellow-500 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-100 hover:text-yellow-700 transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
