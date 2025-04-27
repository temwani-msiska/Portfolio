// lib/posts.ts
import type { Post } from "../types/posts";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  const { data } = await res.json();
  return data as Post[];
}

export async function getPost(slug: string): Promise<Post|undefined> {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[Slug][$eq]=${slug}&populate=*`;
    console.log("[getPost] fetching:", url);           // ← debug
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      const body = await res.text();
      console.error("[getPost] Strapi error:", res.status, body);
      return undefined;
    }
    const { data } = await res.json();
    return data[0] as Post;
  }
  
