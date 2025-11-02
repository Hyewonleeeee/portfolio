"use client";

import { motion } from "framer-motion";

interface GameThumbnailProps {
  title?: string;
}

export default function GameThumbnail({ title }: GameThumbnailProps) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-black">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Red glow effects */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-red-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Metallic texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.05) 2px,
              rgba(255, 255, 255, 0.05) 4px
            )`,
          }}
        />
      </div>

      {/* Sound Wave Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-accent-teal/30"
            style={{
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Central Sound Wave Graphic */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-full h-full opacity-30"
          viewBox="0 0 400 200"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Sound wave lines */}
          {Array.from({ length: 20 }).map((_, i) => {
            const basePhase = i * 0.3;
            const initialY1 = 100 + Math.sin(basePhase) * 50;
            const initialY2 = 100 + Math.sin(basePhase + 0.5) * 50;
            // Pre-calculate all animation values to avoid hydration issues
            const animY1Mid = 100 + Math.sin(basePhase + 1) * 50;
            const animY2Mid = 100 + Math.sin(basePhase + 1.5) * 50;
            return (
              <motion.line
                key={i}
                x1="0"
                x2="400"
                y1={initialY1}
                y2={initialY2}
                stroke="url(#gradient)"
                strokeWidth="2"
                suppressHydrationWarning
                animate={{
                  y1: [initialY1, animY1Mid, initialY1],
                  y2: [initialY2, animY2Mid, initialY2],
                  opacity: [0.2, 0.6, 0.2],
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
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d8b3" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff6b35" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffd700" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Particles/Fire effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => {
          // Use fixed values based on index to avoid hydration mismatch
          const fixedLeft = (i * 7.3) % 100;
          const fixedTop = (i * 11.7) % 100;
          const fixedDuration = 2 + (i % 3) * 0.5;
          const fixedDelay = (i % 4) * 0.8;
          const fixedXOffset = ((i % 5) - 2) * 20;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-teal rounded-full"
              style={{
                left: `${fixedLeft}%`,
                top: `${fixedTop}%`,
              }}
              animate={{
                y: [0, -100, -200],
                x: [0, fixedXOffset, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0],
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

      {/* SOUND DESIGN Typography */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-black tracking-widest text-white drop-shadow-2xl"
            style={{
              textShadow: `
                0 0 10px rgba(0, 216, 179, 0.8),
                0 0 20px rgba(0, 216, 179, 0.6),
                0 0 30px rgba(0, 216, 179, 0.4),
                2px 2px 0px rgba(255, 107, 53, 0.8)
              `,
              letterSpacing: "0.2em",
            }}
            animate={{
              textShadow: [
                `
                  0 0 10px rgba(0, 216, 179, 0.8),
                  0 0 20px rgba(0, 216, 179, 0.6),
                  0 0 30px rgba(0, 216, 179, 0.4),
                  2px 2px 0px rgba(255, 107, 53, 0.8)
                `,
                `
                  0 0 15px rgba(255, 107, 53, 0.8),
                  0 0 25px rgba(255, 107, 53, 0.6),
                  0 0 35px rgba(255, 107, 53, 0.4),
                  2px 2px 0px rgba(0, 216, 179, 0.8)
                `,
                `
                  0 0 10px rgba(0, 216, 179, 0.8),
                  0 0 20px rgba(0, 216, 179, 0.6),
                  0 0 30px rgba(0, 216, 179, 0.4),
                  2px 2px 0px rgba(255, 107, 53, 0.8)
                `,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            SOUND DESIGN
          </motion.h3>
          
          {/* Metallic texture overlay on text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.3) 0%,
                transparent 50%,
                rgba(0, 0, 0, 0.3) 100%
              )`,
              mixBlendMode: "overlay",
            }}
          />
        </motion.div>
      </div>

      {/* Edge glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 border-2 border-accent-teal/50" style={{
          boxShadow: `
            inset 0 0 20px rgba(0, 216, 179, 0.3),
            0 0 40px rgba(0, 216, 179, 0.2)
          `,
        }} />
      </div>
    </div>
  );
}

