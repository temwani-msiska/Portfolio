import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://temwanimsiska.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
    },
  ];
}
