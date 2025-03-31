'use client';

import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import TechStack from '@/components/TechStack';
import ProjectsGrid from '@/components/ProjectsGrid';
import CallToAction from '@/components/CallToAction';


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#db8805] to-yellow-500 text-white">
      <Header />
      <div className="px-6 sm:px-12 md:px-20 py-10 space-y-20">
      
        <AboutHero />
        <TechStack />
        <ProjectsGrid />
        <CallToAction />
      </div>
    </main>
  );
}
