"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
      {
    title: "Zamlex Ai",
    description: "ZamLex is Zambia’s first AI-powered legal assistant — built to transform legal work by combining artificial intelligence with local law, helping professionals move faster, work smarter, and serve clients better",
    image: "/ZamlexPreview.png",
    slug: "Zamlex-ai",
    external: "https://ai.zamlex.com/",
  },
  {
    title: "Temzie Bites",
    description: "A colourful celebration of Zambian food culture.",
    image: "/bites_new_4.png",
    slug: "temzie-bites",
    external: "https://temziebites.com",
  },
  {
    title: "Zamlex",
    description: "A sleek legal service platform for entrepreneurs and investors navigating Zambia’s legal landscape.",
    image: "/ZamlexPreview.png",
    slug: "zamlex",
    external: "https://zamlex.com",
  },
  {
    title: "Smart Mechanics Zambia",
    description: "High-impact portfolio site for a mechanical services leader in Zambia — built with Next.js and Tailwind CSS.",
    image: "/SMZPreview.png", // Make sure this image exists
    slug: "smart-mechanics",
    external: "https://smart-mechanics.vercel.app/", 
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
              link={project.external ? project.external : `/projects/${project.slug}`}
              external={!!project.external} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
