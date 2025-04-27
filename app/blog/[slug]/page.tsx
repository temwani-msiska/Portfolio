import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import { getPost } from "@/lib/posts";
import type { Post, TextBlock, ImageBlock } from "@/types/posts";

interface PageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  console.log("[BlogPostPage] slug is:", slug);

  let post: Post | undefined;
  try {
    post = await getPost(slug);
    console.log("[BlogPostPage] fetched post:", post);
  } catch (err) {
    console.error("[BlogPostPage] getPost error:", err);
  }

  if (!post) {
    console.log("[BlogPostPage] no post found, returning 404");
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
      <Header />

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-bold">{post.Title}</h1>

        {/* Publish Date */}
        {post.PublishDate && (
          <p className="text-yellow-200 text-sm">
            {new Date(post.PublishDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}

        {/* Cover Image */}
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

        {/* Dynamic Zone Content */}
        <div className="prose prose-invert mt-6 max-w-none">
          {post.Content.map((block, idx) => {
            switch (block.__component) {
              case "content.text-block":
                return (
                  <div
                    key={idx}
                    dangerouslySetInnerHTML={{
                      __html: (block as TextBlock).body,
                    }}
                  />
                );

              case "content.image":
                const imgBlock = block as ImageBlock;
                return (
                  <figure key={idx} className="my-8 text-center">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imgBlock.image.url}`}
                      alt={imgBlock.caption ?? post.Title}
                      width={800}
                      height={500}
                      className="mx-auto rounded"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                    {imgBlock.caption && (
                      <figcaption className="mt-2 text-sm text-white/70">
                        {imgBlock.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </main>
  );
}
