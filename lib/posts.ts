// lib/posts.ts
import type { Post } from "@/types/posts";

const API = process.env.NEXT_PUBLIC_STRAPI_URL;

// Strapi sends back `{ data: T[] }`
type StrapiListResponse<T> = { data: T[] };

// fetch all posts
export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    `${API}/api/posts?populate[CoverImage]=*&populate[Content][populate]=*`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  const json = (await res.json()) as StrapiListResponse<Post>;
  return json.data;
}

// fetch single post by slug
export async function getPost(slug: string): Promise<Post | undefined> {
  const url =
    `${API}/api/posts?` +
    `filters[Slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate[CoverImage]=*` +
    `&populate[Content][populate]=*`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch post");
  const json = (await res.json()) as StrapiListResponse<Post>;
  return json.data[0];
}
