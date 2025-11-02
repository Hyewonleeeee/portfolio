"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grain effect */}
      <div className="grain" />
      
      {/* Subtle wave animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="wave-animation absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal rounded-full blur-3xl" />
        <div className="wave-animation absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-yellow rounded-full blur-3xl" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Vertical Typography - Sound Wave Style */}
          <motion.div
            className="flex items-center justify-center gap-4 md:gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* HYEWON - Vertical */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="text-7xl md:text-9xl font-black leading-none"
                style={{ 
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                  letterSpacing: "0.1em"
                }}
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                HYEWON
              </motion.div>
            </motion.div>
            
            {/* LEE - Vertical */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="text-7xl md:text-9xl font-black leading-none"
                style={{ 
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                  letterSpacing: "0.1em"
                }}
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                LEE
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-light mb-8 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Sound Designer & Audio Developer
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl font-light text-accent-teal italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            "Designing sound that breathes with the world."
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}

