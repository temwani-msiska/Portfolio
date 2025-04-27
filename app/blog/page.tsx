"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Post {
  id: number;
  Title: string;
  Slug: string;
  Content: string;
  CoverImage?: {
    url: string;
  };
  PostStatus: "draft" | "published";
  PublishDate: string;
}

async function getPosts() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`;
  console.log("➡️ fetching posts from", url);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const text = await res.text();
    console.error("❌ fetch error:", res.status, text);
    throw new Error("Failed to fetch posts");
  }
  const json = await res.json();
  console.log("✅ posts payload:", json.data);
  return json.data as Post[];
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  // 🔄 fetch on mount
  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((err) => console.error(err));
  }, []);

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
      </Head>

      <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
        <Header />

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Blog</h1>
            <p className="text-white/80 text-lg">
              Thoughts on code, design, career, and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.length > 0 ? (
              posts
                .slice(0, visibleCount)
                .map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Link href={`/blog/${post.Slug}`}>
                      <a className="group block bg-white/10 border border-white/10 backdrop-blur-md rounded-lg p-4 hover:border-yellow-400 transition-colors cursor-pointer space-y-4 overflow-hidden">
                        {/* COVER */}
                        {post.CoverImage?.url ? (
                          <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.CoverImage.url}`}
                              alt={post.Title}
                              fill
                              className="object-cover group-hover:scale-105 transform transition"
                              sizes="(max-width: 640px) 100vw, 480px"
                              priority={i < 2}
                            />
                          </div>
                        ) : (
                          <div className="bg-white/20 rounded-lg w-full h-48 flex items-center justify-center text-white/70">
                            No Image
                          </div>
                        )}

                        {/* TITLE */}
                        <h2 className="text-2xl font-bold group-hover:text-yellow-300 transition-colors">
                          {post.Title}
                        </h2>

                        {/* EXCERPT */}
                        <p className="text-white/80 mt-2">
                          {post.Content.slice(0, 100)}...
                        </p>

                        {/* DATE */}
                        <p className="text-yellow-200 text-sm mt-4">
                          {new Date(post.PublishDate).toLocaleDateString()}
                        </p>
                      </a>
                    </Link>
                  </motion.div>
                ))
            ) : (
              <p className="text-center text-white/70 col-span-2">
                No published blog posts yet.
              </p>
            )}
          </div>

          {visibleCount < posts.length && (
            <div className="text-center">
              <button
                onClick={() => setVisibleCount((c) => c + 3)}
                className="mt-8 bg-white/20 hover:bg-yellow-400 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
