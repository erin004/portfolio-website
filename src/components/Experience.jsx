import { useState } from "react";
import { forwardRef } from "react";
import SpinnerStar from "./SpinnerStar";

const experiences = {
  education: [
    {
      id: 1,
      title: "University of Muhammadiyah Malang",
      company: "Bachelor of Computer Science",
      duration: "2020-2024",
      desc: "Relevant Course: Algorithm Programming, Database, Web Programming, Software Engineering, Data Structures, Object-Oriented Programming (OOP), Software Design, Interaction Engineering, and Requirement Engineering.",
    },
  ],
  training: [
    {
      id: 1,
      title: "Fullstack Web Developer",
      company: "Harisenin Bootcamp",
      duration: "2025",
      desc: "Intensive bootcamp focusing on fullstack development using MERN stack.",
    },
    {
      id: 2,
      title: "Frontend React JS",
      company: "SanberCode",
      duration: "2023",
      desc: "Practical React training with modern hooks and component design.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      company: "SanberCode",
      duration: "2023",
      desc: "Focused on Figma, design systems, and user-centric workflows.",
    },
    {
      id: 4,
      title: "Laravel Web Development",
      company: "SanberCode",
      duration: "2022",
      desc: "Training on backend development with Laravel, MySQL, and REST APIs.",
    },
  ],
  experience: [
    {
      id: 1,
      company: "PT Talenta Sinergi Group",
      role: "Frontend Programmer",
      duration: "2023",
      points: [
        "Developed forum website with search, filter, tag, and user profile features.",
        "Built mentor dashboard with drag-and-drop interface for curriculum and assignment management.",
        "Created Stack Overflow–like submission form, question detail page, and CMS for streamlined content editing.",
      ],
    },
    {
      id: 2,
      company: "Boosternesia",
      role: "Web Development & Digital Marketing Staff",
      duration: "Sep 2021 – Dec 2021",
      points: [
        "Revamped company website with HTML, CSS, Bootstrap, and JavaScript for better appearance and performance.",
        "Ensured responsive design across devices, improving accessibility and engagement.",
        "Redesigned UI for more intuitive user experience, boosting user satisfaction.",
      ],
    },
  ],
};

const Experience = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState("education");
  const [openCard, setOpenCard] = useState(null);

  return (
    <section ref={ref} className="py-16 px-4 bg-[#0a0a0a] text-white relative">
      <div className="flex justify-center mb-8">
        <SpinnerStar size={50} />
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 tracking-wide">
        RESUME
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["education", "training", "experience"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenCard(null);
            }}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition 
            ${
              activeTab === tab
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md scale-105"
                : "bg-[#111] text-gray-400 hover:text-white hover:scale-105"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {experiences[activeTab].map((exp) => (
          <div
            key={exp.id}
            onClick={() => setOpenCard(openCard === exp.id ? null : exp.id)}
            className="cursor-pointer bg-[#111] border border-gray-800 rounded-lg px-6 py-4 hover:border-pink-500 transition relative"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {activeTab === "experience" ? exp.role : exp.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {exp.company}
                </p>
              </div>
              <span className="text-gray-300 text-base md:text-lg">
                {openCard === exp.id ? "▼" : "▶"}
              </span>
            </div>

            <div
              className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                openCard === exp.id
                  ? "grid-rows-[1fr] opacity-100 mt-3"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-gray-300 text-sm md:text-base leading-relaxed">
                {activeTab === "experience" ? (
                  <>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-pink-400 font-semibold">
                      Year: {exp.duration}
                    </p>
                  </>
                ) : (
                  <>
                    <p>{exp.desc}</p>
                    <p className="mt-2 text-pink-400 font-semibold">
                      Year: {exp.duration}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Experience;
