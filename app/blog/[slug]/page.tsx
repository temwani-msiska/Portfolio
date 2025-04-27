import Header from "@/components/Header";
import Image from "next/image";
import { getPost } from "@/lib/posts";
import type { Post, TextBlock, ImageBlock } from "@/types/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post: Post | undefined;
  try {
    post = await getPost(slug);
  } catch (err: unknown) {
    const error = err as Error;
    return (
      <div className="p-8 bg-red-100 text-red-800">
        <h1 className="text-2xl font-bold mb-4">❌ Fetch error</h1>
        <pre>{String(error.message || error)}</pre>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="p-8 bg-yellow-100 text-yellow-800">
        <h1 className="text-2xl font-bold mb-2">Post not found</h1>
        <p>No post with slug <code>{slug}</code></p>
      </div>
    );
  }

  const coverUrl = post.CoverImage?.data?.attributes?.url;
  const blocks = Array.isArray(post.Content) ? post.Content : [];

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
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert mt-6 max-w-none">
          {blocks.length ? (
            blocks.map((block, idx) => {
              if (block.__component === "content.text-block") {
                const tb = block as TextBlock;
                return (
                  <div
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: tb.body }}
                  />
                );
              }

              if (
                block.__component === "content.image" ||
                block.__component === "content.content-image"
              ) {
                const ib = block as ImageBlock;
                const imgUrl = ib.image?.data?.attributes?.url;
                if (!imgUrl) return null;

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
