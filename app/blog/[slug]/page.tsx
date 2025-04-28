import Header from "@/components/Header";
import Image from "next/image";
import { getPost } from "@/lib/posts";
import type { TextBlock, ImageBlock } from "@/types/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params; // ✅ MUST await params

  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="p-8 bg-red-100 text-red-800">
        <h1 className="text-2xl font-bold mb-4">❌ Post not found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  console.log("[DEBUG] Full post object:", post);
  console.log("[DEBUG] Post Content array:", post.Content);

  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
      <Header />

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Cover Image */}
        {post.CoverImage?.url && (
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.CoverImage.url}`}
              alt={post.Title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold">{post.Title}</h1>

        {/* Publish Date */}
        {post.PublishDate && (
          <p className="text-yellow-100 text-sm">
            {new Date(post.PublishDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {post.Content?.map((block, idx) => {
            console.log(`[DEBUG] Rendering block ${idx}:`, block);

            if (block.__component === "content.text-block") {
              const textBlock = block as TextBlock;
              return (
                <div key={textBlock.id}>
                  <p>{textBlock.body}</p>
                </div>
              );
            }

            if (block.__component === "content.image") {
              const imageBlock = block as ImageBlock;
              console.log(`[DEBUG] Found imageBlock:`, imageBlock);

              const rawImage = imageBlock.image as
                | { url: string }
                | { data?: { attributes?: { url: string } } }
                | undefined;

              let imageUrl = "";

              if (rawImage && "url" in rawImage && rawImage.url) {
                imageUrl = rawImage.url;
              } else if (
                rawImage &&
                "data" in rawImage &&
                rawImage.data?.attributes?.url
              ) {
                imageUrl = rawImage.data.attributes.url;
              }

              console.log(`[DEBUG] Resolved image URL:`, imageUrl);

              if (!imageUrl) {
                console.warn(`[WARNING] No image URL found for block`, imageBlock);
                return null;
              }

              return (
                <div key={imageBlock.id} className="my-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                    alt={imageBlock.caption || "Blog image"}
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                  {imageBlock.caption && (
                    <p className="text-center text-sm text-white/80 mt-2">
                      {imageBlock.caption}
                    </p>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </main>
  );
}
