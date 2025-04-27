import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";

interface Post {
  id: number;
  Title: string;
  Slug: string;
  Content: { type: string; children: { text: string }[] }[];
  CoverImage?: {
    url: string;
  };
  PostStatus: "draft" | "published";
  PublishDate: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[$and][0][Slug][$eq]=${slug}&filters[$and][1][PostStatus][$eq]=published&populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const data = await res.json();
  return data.data[0] as Post | undefined;
}

// ✅ IMPORTANT: Added for Next.js 15 routing to work!
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`, {
    cache: "no-store",
  });
  const data = await res.json();
  const posts = data.data as Post[];

  return posts.map((post) => ({
    slug: post.Slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;

  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

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
              alt={post.Title || "Blog Post Cover"}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </div>
        )}
        <div className="prose prose-invert mt-6 max-w-none">
          {Array.isArray(post.Content) ? (
            post.Content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index}>
                    {block.children.map((child) => child.text).join("")}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2 key={index}>
                    {block.children.map((child) => child.text).join("")}
                  </h2>
                );
              }
              return null;
            })
          ) : (
            <p>No content available.</p>
          )}
        </div>
      </div>
    </main>
  );
}
