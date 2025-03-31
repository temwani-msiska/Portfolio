import { notFound } from 'next/navigation';
import Image from 'next/image';

const projects = [
  {
    title: 'DevSprint',
    description: 'AI-powered task manager for developers. Includes automatic sprint planning, time tracking, and GitHub integration.',
    image: '/images/devsprint.png',
    slug: 'devsprint',
  },
  {
    title: 'SwiftBudget',
    description: 'A clean personal finance tracker with budget categories, analytics, and savings goals.',
    image: '/images/swiftbudget.png',
    slug: 'swiftbudget',
  },
  {
    title: 'SkillBridge',
    description: 'A peer-to-peer learning platform that lets users connect, teach, and grow together.',
    image: '/images/skillbridge.png',
    slug: 'skillbridge',
  },
  {
    title: 'HomeQuest',
    description: 'A student rental portal to help students find trusted landlords and verified listings.',
    image: '/images/homequest.png',
    slug: 'homequest',
  },
];

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg border border-white/20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
          />
        </div>
        <p className="text-lg leading-relaxed">{project.description}</p>
      </div>
    </main>
  );
}
