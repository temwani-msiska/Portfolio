// lib/posts.ts
import type { Post } from "@/types/posts";

const API = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API}/api/posts?populate=*`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  const { data } = await res.json();
  return data as Post[];
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const res = await fetch(
    `${API}/api/posts?filters[Slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch post");
  const { data } = await res.json();
  return data[0] as Post;
}
