// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import { getPost } from "@/lib/posts";
import type { Post, TextBlock, ImageBlock } from "@/types/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  const blocks = Array.isArray(post.Content) ? post.Content : [];
  const coverUrl = post.CoverImage?.data?.attributes?.url;

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

        {coverUrl && (
          <div className="relative w-full h-96 my-6">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverUrl}`}
              alt={post.Title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert mt-6 max-w-none">
          {blocks.length > 0 ? (
            blocks.map((block, idx) => {
              // Text block
              if (block.__component === "content.text-block") {
                const tb = block as TextBlock;
                return (
                  <div
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: tb.body }}
                  />
                );
              }

              // Image block (either UID)
              if (
                block.__component === "content.image" ||
                block.__component === "content.content-image"
              ) {
                // safely grab whatever is in `block.image`
                const rawImage = (block as any).image;
                // now safely extract a URL
                const imgUrl =
                  typeof rawImage === "string"
                    ? rawImage
                    : typeof rawImage?.url === "string"
                    ? rawImage.url
                    : rawImage?.data?.attributes?.url;

                if (!imgUrl) {
                  // no image to render
                  return null;
                }

                const caption = (block as ImageBlock).caption;

                return (
                  <figure key={idx} className="my-8 text-center">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imgUrl}`}
                      alt={caption ?? post.Title}
                      width={800}
                      height={500}
                      className="mx-auto rounded"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                    {caption && (
                      <figcaption className="mt-2 text-sm text-white/70">
                        {caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return null;
            })
          ) : (
            <p className="text-center text-white/70">No content available.</p>
          )}
        </div>
      </div>
    </main>
  );
}
