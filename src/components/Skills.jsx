/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useMemo } from "react";
/* eslint-enable no-unused-vars */

export default function Skills() {
  const stars = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1.5,
        delay: Math.random() * 5,
        color: ["#ffffff", "#a855f7", "#38bdf8"][Math.floor(Math.random() * 3)],
      })),
    []
  );

  return (
    <section className="relative overflow-hidden py-20 bg-[#0a0a0a] font-heading">
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

      {/* Content */}
      <div className="relative z-10 flex items-center px-6 md:px-12">
        {/* Static label */}
        <div className="text-3xl md:text-4xl font-extrabold tracking-widest shrink-0 mr-6">
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.7)]">
            My Skills ✦
          </span>
        </div>

        {/* Marquee */}
        <div className="flex overflow-hidden relative flex-1">
          {/* Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20" />

          {/* Scrolling text */}
          <div className="flex whitespace-nowrap animate-scroll text-2xl md:text-3xl font-semibold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
            <span className="mx-10">⚡ React.js</span>
            <span className="mx-10">🔥 PHP</span>
            <span className="mx-10">💻 JavaScript</span>
            <span className="mx-10">🚀 Laravel</span>
            <span className="mx-10">🗄️ SQL</span>
            <span className="mx-10">🎨 Tailwind</span>
            <span className="mx-10">🎯 Figma</span>
            <span className="mx-10">☕ Java</span>
            <span className="mx-10">🔧 C</span>

            {/* duplicate */}
            <span className="mx-10">⚡ React.js</span>
            <span className="mx-10">🔥 PHP</span>
            <span className="mx-10">💻 JavaScript</span>
            <span className="mx-10">🚀 Laravel</span>
            <span className="mx-10">🗄️ SQL</span>
            <span className="mx-10">🎨 Tailwind</span>
            <span className="mx-10">🎯 Figma</span>
            <span className="mx-10">☕ Java</span>
            <span className="mx-10">🔧 C</span>
          </div>
        </div>
      </div>
    </section>
  );
}
