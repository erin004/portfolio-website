import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar({ refs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "bg-black/40 backdrop-blur-md border-b border-white/10"
            : "md:bg-transparent bg-black"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 pointer-events-auto">
          <h1 className="text-lg font-extrabold tracking-wider pointer-events-auto">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              erin
            </span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-base uppercase font-medium pointer-events-auto">
            <li onClick={() => handleScrollTo("caseStudy")} className="hover:text-pink-400 transition cursor-pointer">Projects</li>
            <li onClick={() => handleScrollTo("experience")} className="hover:text-purple-400 transition cursor-pointer">About</li>
            <li onClick={() => handleScrollTo("footer")} className="hover:text-blue-400 transition cursor-pointer">Contact</li>
          </ul>

          {/* Mobile button */}
          <button className="md:hidden text-white pointer-events-auto" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 pointer-events-auto">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-10 py-12 flex flex-col items-center text-white shadow-lg scale-95 opacity-0 animate-fadeIn pointer-events-auto">
            <button className="absolute top-1 right-2 text-white pointer-events-auto" onClick={() => setMenuOpen(false)}>
              <X size={18} />
            </button>

            <ul className="flex flex-col gap-6 text-lg font-medium pointer-events-auto">
              <li onClick={() => handleScrollTo("caseStudy")} className="cursor-pointer hover:text-pink-400 transition">Projects</li>
              <li onClick={() => handleScrollTo("experience")} className="cursor-pointer hover:text-purple-400 transition">About</li>
              <li onClick={() => handleScrollTo("footer")} className="cursor-pointer hover:text-blue-400 transition">Contact</li>
            </ul>

            <div className="flex gap-6 mt-10 pointer-events-auto">
              <a href="#" className="hover:text-pink-400 pointer-events-auto"><Mail /></a>
              <a href="https://github.com/erin004" className="hover:text-purple-400 pointer-events-auto"><Github /></a>
              <a href="#" className="hover:text-blue-400 pointer-events-auto"><Linkedin /></a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease forwards; }
      `}</style>
    </>
  );
}
