'use client';

import ProjectCard from '@/components/ProjectCard';
import Header from "@/components/Header";

const projects = [
  {
    title: 'DevSprint',
    description: 'AI-powered task manager for developers.',
    image: '/devsprint.png',
    slug: 'devsprint',
  },
  {
    title: 'SwiftBudget',
    description: 'Personal finance tracking made simple.',
    image: '/swiftbudget.png',
    slug: 'swiftbudget',
  },
  {
    title: 'SkillBridge',
    description: 'Peer-to-peer learning platform.',
    image: '/skillbridge.png',
    slug: 'skillbridge',
  },
  {
    title: 'HomeQuest',
    description: 'Student property rental portal.',
    image: '/homequest.png',
    slug: 'homequest',
  },
];

export default function ProjectsPage() {
  return (
    
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
       <Header />
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            A selection of personal projects built with modern frameworks and clean design.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
