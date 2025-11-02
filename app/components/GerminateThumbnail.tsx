"use client";

import { motion } from "framer-motion";

interface GerminateThumbnailProps {
  title?: string;
}

export default function GerminateThumbnail({ title }: GerminateThumbnailProps) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-950 via-navy-950 to-indigo-950">
      {/* Soft green and beige light gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(245, 245, 220, 0.1)" }} // beige
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Circular ripple spreading outward like sound waves from a seed */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-green-400/30"
            style={{
              width: `${60 + i * 50}px`,
              height: `${60 + i * 50}px`,
            }}
            animate={{
              scale: [1, 2.5, 2.5],
              opacity: [0.4, 0, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Additional subtle ripples */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute rounded-full border border-green-300/20"
            style={{
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
            }}
            animate={{
              scale: [0.8, 1.5, 0.8],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Glowing particle trails symbolizing echo and growth */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const distance = 80;
          // Pre-calculate values to avoid hydration mismatch
          const initialLeft = Math.cos(angle) * distance;
          const initialTop = Math.sin(angle) * distance;
          const animX = Math.cos(angle) * 100;
          const animY = Math.sin(angle) * 100;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `calc(50% + ${initialLeft}px)`,
                top: `calc(50% + ${initialTop}px)`,
              }}
              suppressHydrationWarning
              animate={{
                x: [0, animX, 0],
                y: [0, animY, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.1,
              }}
            />
          );
        })}
      </div>

      {/* Seed/center point */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-3 h-3 bg-green-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 10px rgba(74, 222, 128, 0.8), 0 0 20px rgba(74, 222, 128, 0.5)",
          }}
        />
      </div>

      {/* GERMINATE DELAY Typography */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative text-center w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-light tracking-widest text-white text-center"
            style={{
              textShadow: `
                0 0 10px rgba(255, 255, 255, 0.5),
                0 0 20px rgba(255, 255, 255, 0.3),
                0 0 30px rgba(74, 222, 128, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.5)
              `,
              letterSpacing: "0.2em",
              textAlign: "center",
            }}
            animate={{
              textShadow: [
                `
                  0 0 10px rgba(255, 255, 255, 0.5),
                  0 0 20px rgba(255, 255, 255, 0.3),
                  0 0 30px rgba(74, 222, 128, 0.2),
                  0 2px 4px rgba(0, 0, 0, 0.5)
                `,
                `
                  0 0 12px rgba(255, 255, 255, 0.6),
                  0 0 24px rgba(255, 255, 255, 0.4),
                  0 0 36px rgba(74, 222, 128, 0.3),
                  0 2px 4px rgba(0, 0, 0, 0.5)
                `,
                `
                  0 0 10px rgba(255, 255, 255, 0.5),
                  0 0 20px rgba(255, 255, 255, 0.3),
                  0 0 30px rgba(74, 222, 128, 0.2),
                  0 2px 4px rgba(0, 0, 0, 0.5)
                `,
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            GERMINATE DELAY
          </motion.h3>
        </motion.div>
      </div>

      {/* Edge glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 border-2 border-green-400/30" style={{
          boxShadow: `
            inset 0 0 20px rgba(74, 222, 128, 0.2),
            0 0 40px rgba(74, 222, 128, 0.15)
          `,
        }} />
      </div>
    </div>
  );
}

