import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

interface Post {
  id: number;
  Title: string;
  Slug: string;
  Content: BlocksContent;
  CoverImage?: { url: string };
  PostStatus: "draft" | "published";
  PublishDate: string;
}

interface PageProps {
  params: { slug: string };
}

async function getPost(slug: string): Promise<Post | undefined> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[$and][0][Slug][$eq]=${slug}&filters[$and][1][PostStatus][$eq]=published&populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const json = await res.json();
  return json.data[0] as Post | undefined;
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
      <Header />

      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">{post.Title}</h1>

        {post.PublishDate && (
          <p className="text-yellow-200 text-sm">
            {new Date(post.PublishDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}

        {post.CoverImage?.url && (
          <div className="relative w-full h-96 my-6">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.CoverImage.url}`}
              alt={post.Title}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </div>
        )}

        <article className="prose prose-invert mt-6">
          <BlocksRenderer
            content={post.Content}
            blocks={{
              heading: ({ level, children }) => {
                // Use React.ElementType so TS knows this is a valid JSX tag
                const Tag = `h${level}` as React.ElementType;
                const sizeClass =
                  level === 1
                    ? "text-4xl font-bold mt-8"
                    : level === 2
                    ? "text-3xl font-semibold mt-6"
                    : "text-2xl font-medium mt-4";
                return <Tag className={sizeClass}>{children}</Tag>;
              },
              paragraph: ({ children }) => <p className="mt-4">{children}</p>,
              image: ({ image }) => (
                <div className="relative w-full h-64 my-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
                    alt={image.alternativeText || post.Title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              ),
              // add list, quote, code, etc. here if you need them
            }}
          />
        </article>
      </div>
    </main>
  );
}
