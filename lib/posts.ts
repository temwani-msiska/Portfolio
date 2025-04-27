// lib/posts.ts
import type { Post } from "../types/posts";

type StrapiEntry = {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    // Re-use your Post type here instead of `any`
    Content: Post["Content"];
    CoverImage?: Post["CoverImage"];
    PostStatus: Post["PostStatus"];
    PublishDate?: string;
  };
};

const DEEP_POPULATE = "deep";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=${DEEP_POPULATE}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");

  const { data } = (await res.json()) as { data: StrapiEntry[] };

  return data.map(({ id, attributes }) => ({
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts` +
    `?filters[Slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate=${DEEP_POPULATE}`;

  console.log("[getPost] fetching:", url);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    console.error("[getPost] Strapi error:", res.status, await res.text());
    return undefined;
  }

  const { data } = (await res.json()) as { data: StrapiEntry[] };
  const entry = data[0];
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
