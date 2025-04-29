'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Temzie Bites',
    description: 'A colourful celebration of Zambian food culture, with recipes, videos, and culinary storytelling.',
    image: '../public/bites_new_4.png', 
    slug: 'temzie-bites',
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

export default function ProjectsGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">Projects</h2>
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
    </section>
  );
}
