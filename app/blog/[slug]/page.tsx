import { notFound } from "next/navigation";
import Header from "@/components/Header";

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

async function getPost(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[$and][0][Slug][$eq]=${slug}&filters[$and][1][PostStatus][$eq]=published&populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const data = await res.json();
  return data.data[0] as Post | undefined;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
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
        <p className="text-yellow-200 text-sm">
          {new Date(post.PublishDate).toLocaleDateString()}
        </p>
        {post.CoverImage?.url && (
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.CoverImage.url}`}
            alt={post.Title}
            className="rounded-lg w-full h-96 object-cover my-6"
          />
        )}
        <div className="prose prose-invert mt-6 max-w-none">
          {Array.isArray(post.Content) ? (
            post.Content.map((block, index) => { // <- index added here
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
            <p>{typeof post.Content === "string" ? post.Content : "No content available."}</p>
          )}
        </div>
      </div>
    </main>
  );
}
