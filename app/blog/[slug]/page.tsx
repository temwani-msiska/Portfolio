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
  // 1. Extract slug
  const { slug } = await params;
  console.log("[BlogPostPage] slug:", slug);

  // 2. Fetch post
  let post: Post | undefined;
  try {
    post = await getPost(slug);
    console.log("[BlogPostPage] fetched post:", post);
  } catch (err) {
    console.error("[BlogPostPage] getPost error:", err);
  }
  if (!post) {
    console.log("[BlogPostPage] no post found → 404");
    return notFound();
  }

  // 3. Unwrap blocks
  const blocksArray = Array.isArray(post.Content) ? post.Content : [];
  console.log("[BlogPostPage] Content blocks:", blocksArray);

  // 4. Unwrap cover image (Strapi v5 media shape)
  const coverData = (post as any).CoverImage?.data;
  const coverUrl = coverData?.attributes?.url as string | undefined;
  console.log("[BlogPostPage] coverUrl:", coverUrl);

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

        {/* Cover Image (if any) */}
        {coverUrl && (
          <div className="relative w-full h-96 my-6">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverUrl}`}
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
          {blocksArray.length > 0 ? (
            blocksArray.map((block, idx) => {
              switch (block.__component) {
                // ————————————————————————————————————————
                case "content.text-block": {
                  const tb = block as TextBlock;
                  return (
                    <div
                      key={idx}
                      // richtext HTML
                      dangerouslySetInnerHTML={{ __html: tb.body }}
                    />
                  );
                }

                // ————————————————————————————————————————
                case "content.image": {
                  // image field comes back as { data: { attributes: { url, ... } } }
                  const ib = block as unknown as ImageBlock & { image: { data?: { attributes?: { url?: string } } }; caption?: string };
                  const imgData = ib.image?.data;
                  const imgUrl = imgData?.attributes?.url;
                  console.log(`[BlogPostPage] block[${idx}] image URL:`, imgUrl);

                  if (!imgUrl) {
                    return null; // skip if no URL
                  }

                  return (
                    <figure key={idx} className="my-8 text-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imgUrl}`}
                        alt={ib.caption ?? post.Title}
                        width={800}
                        height={500}
                        className="mx-auto rounded"
                        sizes="(max-width: 768px) 100vw, 720px"
                      />
                      {ib.caption && (
                        <figcaption className="mt-2 text-sm text-white/70">
                          {ib.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                // ————————————————————————————————————————
                default:
                  return null;
              }
            })
          ) : (
            <p className="text-center text-white/70">No content available.</p>
          )}
        </div>
      </div>
    </main>
  );
}
