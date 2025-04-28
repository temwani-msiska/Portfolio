import type { Post } from "@/types/posts";

type StrapiListResponse<T> = {
  data: Array<T>;
};

export async function getPosts(): Promise<Post[]> {
  const API = process.env.NEXT_PUBLIC_STRAPI_URL;
  console.log("[DEBUG] API URL:", API);

  if (!API) throw new Error("API URL not defined");

  const res = await fetch(
    `${API}/api/posts?populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    const body = await res.text();
    console.error("[getPosts] Failed fetch:", res.status, body);
    throw new Error("Failed to fetch posts");
  }

  const json = (await res.json()) as StrapiListResponse<Post>;

  // ✅ No need to touch item.attributes anymore
  return json.data;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const API = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!API) throw new Error("API URL not defined");

  const url =
    `${API}/api/posts?` +
    `filters[Slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate=*`;

  console.log("[DEBUG] getPost Fetching from:", url);

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const body = await res.text();
    console.error("[getPost] Failed fetch:", res.status, body);
    throw new Error("Failed to fetch post");
  }

  const json = (await res.json()) as StrapiListResponse<Post>;
  const item = json.data[0];
  if (!item) return undefined;

  return item; // ✅ No need for attributes
}
