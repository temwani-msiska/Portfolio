"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    title: "DevSprint",
    description: "AI-powered task manager for devs.",
    image: "/devsprint.png",
    slug: "devsprint",
  },
  {
    title: "SwiftBudget",
    description: "Personal finance tracker.",
    image: "/swiftbudget.png",
    slug: "swiftbudget",
  },
];

export default function FeaturedCarousel() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 32 } },
    },
  });
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">
        ✨ Featured Projects
      </h2>
      <div ref={ref} className="keen-slider">
        {featuredProjects.map((project) => (
          <div className="keen-slider__slide" key={project.slug}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={`/projects/${project.slug}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
