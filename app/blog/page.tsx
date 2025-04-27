"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";
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
  // Category?: { name: string }; // Optional future filtering
}

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const response = await res.json();
  console.log("Fetched Posts:", response.data);
  return response.data as Post[];
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useState(() => {
    getPosts().then((data) => setPosts(data));
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more posts on each click
  };

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
              posts.slice(0, visibleCount)
                .filter((post) => post?.Slug) // Only render if Slug exists
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.Slug}`}>
                      <div className="group bg-white/10 border border-white/10 backdrop-blur rounded-lg p-4 hover:border-yellow-400 transition cursor-pointer space-y-4 overflow-hidden">
                        {/* Cover Image */}
                        {post.CoverImage?.url ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.CoverImage.url}`}
                            alt={post.Title}
                            className="rounded-lg w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                          />
                        ) : (
                          <div className="bg-white/20 rounded-lg w-full h-48 flex items-center justify-center text-white/70">
                            No Image Available
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-2xl font-bold group-hover:text-yellow-300 transition">{post.Title}</h2>

                        {/* Excerpt */}
                        <p className="text-white/80 mt-2">
                          {typeof post.Content === "string"
                            ? post.Content.slice(0, 100)
                            : "Content available"}...
                        </p>

                        {/* Publish Date */}
                        <p className="text-yellow-200 text-sm mt-4">
                          {new Date(post.PublishDate).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))
            ) : (
              <p className="text-center text-white/70 col-span-2">No published blog posts yet.</p>
            )}
          </div>

          {/* Load More Button */}
          {visibleCount < posts.length && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
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
