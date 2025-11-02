"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Audio Tools",
    skills: ["Ableton", "Logic", "Cubase", "JUCE", "Max"],
  },
  {
    title: "Development",
    skills: ["Unity", "HTML", "CSS", "JS", "Git"],
  },
  {
    title: "Creative Tools",
    skills: ["GPT", "Cursor"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Skills / Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent-teal">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-accent-teal hover:text-black transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

