import { notFound } from "next/navigation";
import { marked } from "marked";
import Header from "@/components/Header";

const posts: Record<string, { title: string; date: string; content: string }> = {
  'nextjs-portfolio': {
    title: 'How I Built My Portfolio with Next.js 14',
    date: 'March 2025',
    content: `
## Stack Breakdown

- Next.js 14 App Router
- Tailwind CSS
- TypeScript
- Vercel for deployment

## Key Takeaways

Clean structure, fast builds, and fun to write with!
    `,
  },
  'react-vs-django': {
    title: 'React vs. Django: Best Practices',
    date: 'February 2025',
    content: `
## When to Use React

React excels at dynamic UIs and client-side interactivity...

## When to Use Django

Django's power lies in backend logic, APIs, and admin tools.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) return notFound();

  const htmlContent = marked(post.content);

  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
      <Header />
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-yellow-200 text-sm">{post.date}</p>
        <div
          className="prose prose-invert mt-6"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </main>
  );
}
