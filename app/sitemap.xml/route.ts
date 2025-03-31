
export const dynamic = "force-static"; 

export async function GET() {
  const baseUrl = "https://temwanimsiska.dev";

  const pages = [
    "",
    "#about",
    "#projects",
    "#blog",
    "#contact",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
