"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";

const categories = ["All", "Frontend", "AI", "Systems"];

const projects = [
  {
    title: "Temzie Bites",
    description: "A vibrant digital food diary celebrating Zambian culinary traditions through videos, recipes, and stories.",
    image: "/bites_new_4.png", 
    slug: "temzie-bites",
    category: "Frontend",
    external: "https://temziebites.com", 
  },
  {
    title: "Zamlex",
    description: "A sleek legal service platform for entrepreneurs and investors navigating Zambia’s legal landscape.",
    image: "/ZamlexPreview.png", 
    slug: "zamlex",
    category: "Systems",
    external: "https://zamlex.com", 
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
              link={project.external ? project.external : `/projects/${project.slug}`} // ✅ dynamic link
              external={!!project.external} // ✅ tell it when it's external
            />
          ))}
        </div>
      </div>
    </main>
  );
}
