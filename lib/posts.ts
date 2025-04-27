// lib/posts.ts
import type { Post } from "../types/posts";

type StrapiEntry = {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    Content: any[];             // dynamic zone
    CoverImage?: any;           // will be { data: { attributes: { url } } }
    PostStatus: "draft" | "published";
    PublishDate?: string;
  };
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=deep`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  const json = await res.json();

  return (json.data as StrapiEntry[]).map(({ id, attributes }) => ({
    id,
    Title: attributes.Title,
    Slug: attributes.Slug,
    Content: attributes.Content,
    CoverImage: attributes.CoverImage,
    PostStatus: attributes.PostStatus,
    PublishDate: attributes.PublishDate,
  }));
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const url = 
    `${process.env.NEXT_PUBLIC_STRAPI_URL}` +
    `/api/posts?filters[Slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate=deep`;

  console.log("[getPost] fetching:", url);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    console.error("[getPost] Strapi error:", res.status, await res.text());
    return undefined;
  }

  const json = await res.json();
  const entry = (json.data as StrapiEntry[])[0];
  if (!entry) return undefined;

  const { id, attributes } = entry;
  return {
    id,
    Title: attributes.Title,
    Slug: attributes.Slug,
    Content: attributes.Content,
    CoverImage: attributes.CoverImage,
    PostStatus: attributes.PostStatus,
    PublishDate: attributes.PublishDate,
  };
}
