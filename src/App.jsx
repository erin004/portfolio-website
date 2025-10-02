import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offering from "./components/Offering";
import CaseStudy from "./components/CaseStudy";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function App() {
  // Refs untuk scroll
  const caseRef = useRef(null);
  const expRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white">
      <Navbar refs={{ caseStudy: caseRef, experience: expRef, footer: footerRef }} />
      <main className="w-full max-w-[1500px] mx-auto px-4 md:px-6 lg:px-8">
        <Hero />        
        <Offering />
        <Experience ref={expRef} />
        <Skills />
        <CaseStudy ref={caseRef} />
      </main>
      <Footer ref={footerRef} />
    </div>
  );
}
