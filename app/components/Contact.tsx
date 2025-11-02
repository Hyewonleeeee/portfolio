"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact</h2>
        <p className="text-xl text-gray-400 mb-12 italic">
          "Let's build immersive sound together."
        </p>

        <motion.a
          href="mailto:savethewaveform@gmail.com"
          className="flex items-center gap-3 text-lg text-gray-300 hover:text-accent-teal transition-colors group"
          whileHover={{ x: 5 }}
        >
          <Mail className="w-5 h-5" />
          <span>savethewaveform@gmail.com</span>
        </motion.a>
      </motion.div>
    </section>
  );
}

