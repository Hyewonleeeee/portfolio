"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            음악, 기술, 인터랙티브 사운드의 경계에서 창작하는 사람입니다.
          </p>
          <p>
            게임과 미디어의 감정을 전달하는 사운드를 설계하고, 실시간 오디오 시스템을 개발합니다.
          </p>
          <p className="text-accent-teal">
            음파와 코드의 조화로 몰입감 있는 경험을 만듭니다.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

