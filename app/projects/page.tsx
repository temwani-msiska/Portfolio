"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";

const categories = ["All", "Frontend", "AI", "Full Stack"];

const projects = [
  {
    title: "DevSprint",
    description: "AI-powered task manager for developers.",
    image: "/devsprint.png",
    slug: "devsprint",
    category: "AI",
  },
  {
    title: "SwiftBudget",
    description: "Personal finance tracking made simple.",
    image: "/swiftbudget.png",
    slug: "swiftbudget",
    category: "Full Stack",
  },
  {
    title: "SkillBridge",
    description: "Peer-to-peer learning platform.",
    image: "/skillbridge.png",
    slug: "skillbridge",
    category: "Frontend",
  },
  {
    title: "HomeQuest",
    description: "Student property rental portal.",
    image: "/homequest.png",
    slug: "homequest",
    category: "Full Stack",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white px-6 py-12">
      <Header />
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            A selection of personal projects built with modern frameworks and
            clean design.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                activeCategory === cat
                  ? "bg-yellow-500 text-white"
                  : "bg-white/10 text-white/70 hover:bg-yellow-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
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
