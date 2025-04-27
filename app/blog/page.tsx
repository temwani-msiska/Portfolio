"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getPosts } from "../../lib/posts";
import type { Post, TextBlock } from "../../types/posts";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  // grab only text-block bodies, strip HTML, then slice
  const makeExcerpt = (content: Post["Content"], len = 120) => {
    const html = content
      .filter((b): b is TextBlock => b.__component === "content.text-block")
      .map((b) => b.body)
      .join(" ");
    const text = html.replace(/<[^>]+>/g, "");
    return text.length > len ? text.slice(0, len) + "…" : text;
  };

  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
      <Header />

      {/* Hero */}
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-white/80 text-lg">
            Thoughts on code, design, career, and everything in between.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {posts.length ? (
            posts.slice(0, visibleCount).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.Slug}`}>
                  <a className="group block bg-white/10 border border-white/10 backdrop-blur-md rounded-lg p-4 hover:border-yellow-400 transition-colors space-y-4 overflow-hidden">
                    {/* Cover */}
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

                    {/* Title & Excerpt */}
                    <h2 className="text-2xl font-bold group-hover:text-yellow-300 transition-colors">
                      {post.Title}
                    </h2>
                    <p className="text-white/80">{makeExcerpt(post.Content)}</p>

                    {/* Date */}
                    <p className="text-yellow-200 text-sm">
                      {new Date(post.PublishDate).toLocaleDateString()}
                    </p>
                  </a>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="col-span-2 text-center text-white/70">
              No published blog posts yet.
            </p>
          )}
        </div>

        {/* Load More */}
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
  );
}
