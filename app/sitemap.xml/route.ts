// app/sitemap.xml/route.ts
import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://temwanimsiska.dev",
      lastModified: new Date(),
    },
    {
      url: "https://temwanimsiska.dev/#about",
      lastModified: new Date(),
    },
    {
      url: "https://temwanimsiska.dev/#projects",
      lastModified: new Date(),
    },
    {
      url: "https://temwanimsiska.dev/#blog",
      lastModified: new Date(),
    },
    {
      url: "https://temwanimsiska.dev/#contact",
      lastModified: new Date(),
    },
  ];
}
