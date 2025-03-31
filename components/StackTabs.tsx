"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaCss3Alt,
  FaGitAlt,
  FaGoogle,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDjango,
  SiTypescript,
  SiCanva,
} from "react-icons/si";

type TechItem = { name: string; icon: React.ReactNode };
type Category = "Frontend" | "Backend" | "Tools";

const techCategories: Record<Category, TechItem[]> = {
  Frontend: [
    { name: "React", icon: <FaReact size={24} className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={24} className="text-white" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={24} className="text-cyan-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={24} className="text-blue-500" />,
    },
    { name: "CSS3", icon: <FaCss3Alt size={24} className="text-blue-600" /> },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs size={24} className="text-green-500" />,
    },
    { name: "Django", icon: <SiDjango size={24} className="text-green-900" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={24} className="text-blue-800" />,
    },
    {
      name: "Python",
      icon: <FaPython size={24} className="text-yellow-400" />,
    },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt size={24} className="text-orange-500" /> },
    {
      name: "Google Analytics",
      icon: <FaGoogle size={24} className="text-red-500" />,
    },
    { name: "Canva", icon: <SiCanva size={24} className="text-purple-500" /> },
  ],
};

const tabs: Category[] = ["Frontend", "Backend", "Tools"];

export default function StackTabs() {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-2 border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-md font-semibold text-sm md:text-base transition-colors ${
              activeTab === tab
                ? "bg-yellow-500 text-white"
                : "bg-white/10 text-white/70 hover:bg-yellow-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {techCategories[activeTab].map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-lg p-4 border border-white/10 rounded-xl flex items-center gap-4 hover:border-yellow-400 transition"
              title={item.name}
            >
              {item.icon}
              <div className="text-white font-medium">{item.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
