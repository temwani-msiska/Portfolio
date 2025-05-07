'use client';

import Header from '@/components/Header';
import Head from "next/head";

export default function ContactPage() {
   
  return (
    <>
    <Head>
        <title>Temwani Msiska | Systems Developer from Zambia</title>
        <meta
          name="description"
          content="Temwani Msiska is a Systems Developer specializing in React, Next.js, Django & Node. Based in Zambia and open to remote work."
        />
        <meta
          name="keywords"
          content="Temwani Msiska, Systems Developer, React, Next.js, Django, Node, Zambia Developer, remote Developer"
        />
        <meta name="author" content="Temwani Msiska" />
        <meta
          property="og:title"
          content="Temwani Msiska | Systems Developer"
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
          content="Temwani Msiska | Systems Developer"
        />
        <meta
          name="twitter:description"
          content="Experienced Systems Developer based in Zambia — available for freelance or remote roles."
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
              jobTitle: "Systems Developer",
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
      <div className="max-w-2xl mx-auto space-y-10">
        <div className="text-center">
        <h1 className="text-4xl font-bold">Let&apos;s Talk</h1>
          <p className="text-white/80 text-lg mt-2">
            Want to build something together? Reach out using the form below.
          </p>
        </div>

        <form
          action="https://formspree.io/f/{your-form-id}"
          method="POST"
          className="space-y-6 bg-white/10 border border-white/10 backdrop-blur p-6 rounded-xl"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 border text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md text-black bg-white/10 border"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md text-black bg-white/10 border"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-white/70 text-sm">
          Or email me directly:{" "}
          <a
            href="mailto:contact@temwanimsiska.dev"
            className="text-yellow-200 underline"
          >
            contact@temwanimsiska.dev
          </a>
        </div>
      </div>
    </main>
    </>
  );
 
}
