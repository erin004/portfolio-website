/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
/* eslint-enable no-unused-vars */

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        color: ["#ffffff", "#a855f7", "#38bdf8"][
          Math.floor(Math.random() * 3)
        ],
      })),
    []
  );

  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center 
      px-6 md:px-10 bg-[#0a0a0a] overflow-hidden pt-24 md:pt-0"
    >
      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-500/40 blur-3xl mix-blend-screen z-50"
        animate={{ x: cursorPos.x - 48, y: cursorPos.y - 48 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />

      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: `0 0 ${star.size * 4}px ${star.color}`,
            }}
          />
        ))}
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left z-10 flex flex-col justify-center items-center md:items-start mb-10 md:mb-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Yo! 👋 I’m{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Erin
          </span>{" "}
          <br className="hidden md:block" />
          Just your friendly{" "}
          <span className="text-blue-400">Code Wizard 🧙‍♂️</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
          🎓 Informatics grad from{" "}
          <span className="font-semibold text-white">UMM</span>. I love turning{" "}
          <span className="text-pink-400">crazy ideas</span> into{" "}
          <span className="text-purple-400">slick websites</span> &{" "}
          <span className="text-blue-400">fun digital stuff</span>. Basically...
          I code so you don’t have to 🤙
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="https://wa.me/628113601676"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-[10px] font-semibold shadow-lg hover:scale-105 transition 
                    bg-gradient-to-r from-pink-500 to-purple-500 border border-gray-500 !text-white"
        >
          🔮 Summon Me
        </a>
          <a href="/CV ATS Erin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-[10px] border border-gray-500 text-white hover:bg-white/10 backdrop-blur-md transition"
          >
            📄 Grab My CV
          </a>
  
        </div>
      </motion.div>

      {/* Right Crystal Ball (hidden on mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="hidden md:flex flex-1 justify-center relative z-10"
      >
        <div
          className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-500/40 
          bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(147,51,234,0.8)] md:shadow-[0_0_60px_rgba(147,51,234,0.9)] animate-pulse"
        />
      </motion.div>

      {/* Floating Symbols */}
      <motion.span
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-8 md:top-20 md:left-16 text-pink-400 text-2xl md:text-4xl z-10"
      >
        ✦
      </motion.span>

      <motion.span
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-10 md:bottom-24 md:right-20 text-blue-400 text-3xl md:text-5xl z-10"
      >
        ◉
      </motion.span>

      <motion.span
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-12 md:bottom-32 md:left-32 text-purple-400 text-2xl md:text-3xl z-10"
      >
        ✧
      </motion.span>

      <motion.span
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-16 md:top-40 md:right-40 text-pink-500 text-3xl md:text-4xl z-10"
      >
        ❂
      </motion.span>
    </section>
  );
}
