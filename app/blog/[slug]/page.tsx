import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export default async function Page({ params }: Params) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const html = marked(content);

  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
      <Header />
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p className="text-yellow-200 text-sm">{data.date}</p>
        <div
          className="prose prose-invert mt-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
