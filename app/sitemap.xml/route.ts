import { type MetadataRoute } from "next";

export const dynamic = "force-static"; 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://temwanimsiska.dev",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://temwanimsiska.dev/#about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://temwanimsiska.dev/#projects",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://temwanimsiska.dev/#blog",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://temwanimsiska.dev/#contact",
      lastModified: new Date().toISOString(),
    },
  ];
}
