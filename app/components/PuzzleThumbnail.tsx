"use client";

import { motion } from "framer-motion";

interface PuzzleThumbnailProps {
  title?: string;
}

export default function PuzzleThumbnail({ title }: PuzzleThumbnailProps) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-950 via-navy-950 to-indigo-950">
      {/* Animated Background Layers - Turquoise & Coral glows */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 107, 107, 0.15)" }}
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </div>

      {/* Puzzle Grid Pattern (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 216, 179, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 216, 179, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Puzzle pieces pattern (very subtle) */}
      <div className="absolute inset-0 opacity-[0.05]">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 4) * 25 + 10}%`,
              top: `${Math.floor(i / 4) * 50 + 10}%`,
              width: "60px",
              height: "60px",
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              background: "rgba(0, 216, 179, 0.1)",
            }}
            animate={{
              rotate: [0, 90, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Sound Ripple Rings (circular waves) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-teal-400/40"
            style={{
              width: `${80 + i * 60}px`,
              height: `${80 + i * 60}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Central Sound Wave Graphic */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-full h-full opacity-25"
          viewBox="0 0 400 200"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Circular sound waves */}
          {Array.from({ length: 5 }).map((_, i) => {
            const radius = 30 + i * 25;
            return (
              <motion.circle
                key={i}
                cx="200"
                cy="100"
                r={radius}
                fill="none"
                stroke="url(#puzzleGradient)"
                strokeWidth="2"
                animate={{
                  r: [radius, radius + 20, radius],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            );
          })}
          
          {/* Sound wave lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x1 = 200 + Math.cos(angle) * 20;
            const y1 = 100 + Math.sin(angle) * 20;
            const x2 = 200 + Math.cos(angle) * 80;
            const y2 = 100 + Math.sin(angle) * 80;
            // Pre-calculate animation values
            const animX2Mid = 200 + Math.cos(angle) * (80 + 15);
            const animY2Mid = 100 + Math.sin(angle) * (80 + 15);
            return (
              <motion.line
                key={`line-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#puzzleGradient)"
                strokeWidth="1.5"
                suppressHydrationWarning
                animate={{
                  x2: [x2, animX2Mid, x2],
                  y2: [y2, animY2Mid, y2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              />
            );
          })}
          
          <defs>
            <linearGradient id="puzzleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => {
          // Use fixed values based on index to avoid hydration mismatch
          const fixedLeft = (i * 8.7) % 100;
          const fixedTop = (i * 13.2) % 100;
          const fixedDuration = 2.5 + (i % 4) * 0.6;
          const fixedDelay = (i % 5) * 0.9;
          const fixedXOffset = ((i % 6) - 3) * 15;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-teal-400 rounded-full"
              style={{
                left: `${fixedLeft}%`,
                top: `${fixedTop}%`,
              }}
              animate={{
                y: [0, -80, -160],
                x: [0, fixedXOffset, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0],
              }}
              transition={{
                duration: fixedDuration,
                repeat: Infinity,
                ease: "easeOut",
                delay: fixedDelay,
              }}
            />
          );
        })}
      </div>

      {/* PUZZLE MUSIC GAME Typography */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-xl md:text-2xl font-bold tracking-wider text-gray-300"
            style={{
              textShadow: `
                0 0 8px rgba(148, 163, 184, 0.6),
                0 0 16px rgba(148, 163, 184, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.5)
              `,
              letterSpacing: "0.15em",
              color: "#cbd5e1", // light gray
            }}
            animate={{
              textShadow: [
                `
                  0 0 8px rgba(148, 163, 184, 0.6),
                  0 0 16px rgba(148, 163, 184, 0.4),
                  0 2px 4px rgba(0, 0, 0, 0.5)
                `,
                `
                  0 0 10px rgba(94, 234, 212, 0.6),
                  0 0 20px rgba(94, 234, 212, 0.4),
                  0 2px 4px rgba(0, 0, 0, 0.5)
                `,
                `
                  0 0 8px rgba(148, 163, 184, 0.6),
                  0 0 16px rgba(148, 163, 184, 0.4),
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
            PUZZLE MUSIC GAME
          </motion.h3>
        </motion.div>
      </div>

      {/* Edge glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 border-2 border-teal-400/40" style={{
          boxShadow: `
            inset 0 0 20px rgba(94, 234, 212, 0.25),
            0 0 40px rgba(94, 234, 212, 0.15)
          `,
        }} />
      </div>
    </div>
  );
}

