import type { Post } from "@/types/posts";

const API = process.env.NEXT_PUBLIC_STRAPI_URL;

// Strapi’s list response with data → { id, attributes: T }
type StrapiListResponse<T> = {
  data: Array<{
    id: number;
    attributes: T;
  }>;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    `${API}/api/posts?` +
      `populate[CoverImage]=*&` +
      `populate[Content][populate]=*`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");

  const json = (await res.json()) as StrapiListResponse<Post>;
  return json.data.map((item) => ({
    ...item.attributes,
    id: item.id, // 👈 put id **after** spreading attributes
  }));
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const url =
    `${API}/api/posts?` +
    `filters[Slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate[CoverImage]=*&populate[Content][populate]=*`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch post");

  const json = (await res.json()) as StrapiListResponse<Post>;
  const item = json.data[0];
  if (!item) return undefined;

  return {
    ...item.attributes,
    id: item.id, // 👈 same fix here
  };
}
