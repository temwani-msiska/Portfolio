// lib/posts.ts
import type { Post } from "@/types/posts";

const API = process.env.NEXT_PUBLIC_STRAPI_URL;

// fetch all posts (for listing)
export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    `${API}/api/posts?populate[CoverImage]=*&populate[Content][populate]=*`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  const json = await res.json();
  return (json.data as any[]) as Post[];
}

// fetch single post by slug (for [slug] page)
export async function getPost(slug: string): Promise<Post | undefined> {
  const url =
    `${API}/api/posts?` +
    `filters[Slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate[CoverImage]=*` +
    `&populate[Content][populate]=*`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch post");
  const json = await res.json();

  // json.data may be an empty array
  return (json.data?.[0] as Post) ?? undefined;
}
