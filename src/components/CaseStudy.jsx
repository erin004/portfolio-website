import { useState, forwardRef } from "react";
import { GithubIcon } from "lucide-react";
import SpinnerStar from "./SpinnerStar";

const projects = [
  {
    id: 1,
    tag: "WEB",
    title: "To Do List",
    desc: "A to-do list website with features like task filtering by day, priority levels, task editing, and overdue detection if tasks are not completed on time.",
    img: "src/assets/to-do-list.png",
    link: "https://github.com/erin004",
  },
  {
    id: 2,
    tag: "WEB",
    title: "Video Learning React App",
    desc: "A React.js website with CRUD API integration to manage and display available courses.",
    img: "src/assets/video-belajar.png",
    link: "https://github.com/erin004",
  },
  {
    id: 3,
    tag: "WEB",
    title: "Furniture Landing Page",
    desc: "A React.js landing page website featuring a carousel for better visuals and a dropdown menu for easier navigation.",
    img: "src/assets/furniture.png",
    link: "https://github.com/erin004",
  },
  {
    id: 4,
    tag: "WEB",
    title: "Job Finder App",
    desc: "A job portal website built with React and Axios for CRUD job data. Includes authentication for secure login and data management.",
    img: "src/assets/job-portal.png",
    link: "https://github.com/erin004",
  },
  {
    id: 5,
    tag: "WEB",
    title: "Learning Management System",
    desc: "A web-based LMS built with React.js, featuring course management, user authentication, and CRUD functionality for handling learning materials.",
    img: "src/assets/lms.png",
    link: "https://github.com/erin004",
  },
  {
    id: 6,
    tag: "UI/UX",
    title: "Cozy App",
    desc: "UI/UX design for an accommodation app to find boarding houses or hotels, with features like ratings, integrated maps, and direct call to the owner.",
    img: "src/assets/cozy-app.png",
    link: "https://github.com/erin004",
  },
  {
    id: 7,
    tag: "UI/UX",
    title: "Kids Learning App",
    desc: "UI/UX design for an early childhood education app with features like level selection, interactive games, learning videos, and progress tracking.",
    img: "src/assets/kids-learning-app.png",
    link: "https://github.com/erin004",
  },
  {
    id: 8,
    tag: "UI/UX",
    title: "LansiHealth",
    desc: "UI/UX design for an app targeting the elderly, featuring medication reminders and doctor consultation schedules.",
    img: "src/assets/lansiHealth.png",
    link: "https://github.com/erin004",
  },
  {
    id: 9,
    tag: "UI/UX",
    title: "Flight Booking App",
    desc: "UI/UX design for a flight booking app with features like flight search, ticket booking, seat selection, and payment integration.",
    img: "src/assets/ngeFly.png",
    link: "https://github.com/erin004",
  },
  {
    id: 10,
    tag: "WEB",
    title: "Video Learning Web",
    desc: "A React.js learning platform with CRUD functionality for course data using Axios API integration.",
    img: "src/assets/video-belajar.png",
    link: "https://github.com/erin004",
  },
];

const CaseStudy = forwardRef((props, ref) => {
  const [filter, setFilter] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    filter === "ALL" ? projects : projects.filter((p) => p.tag === filter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section ref={ref} className="py-16 px-4 relative">
      {/* Icon Spinner */}
      <div className="flex justify-center mb-8">
        <SpinnerStar size={50} />
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 tracking-wide">
        CASE STUDY
      </h2>
      <p className="text-gray-400 text-sm md:text-base text-center max-w-2xl mx-auto mb-10">
        A glimpse of my highlighted works ✨
      </p>

      {/* Filter Menu */}
      <div className="flex justify-center gap-4 mb-10">
        {["ALL", "WEB", "UI/UX"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setShowAll(false);
            }}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition 
              ${
                filter === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md scale-105"
                  : "bg-[#111] text-gray-400 hover:text-white hover:scale-105"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {displayedProjects.map((p) => (
          <div
            key={p.id}
            className="relative group bg-[#111] border border-gray-800 rounded-lg overflow-hidden shadow-md hover:border-pink-500 transition transform hover:-translate-y-1 flex flex-col"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#9333ea22,_transparent_70%)] opacity-60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#ec489922,_transparent_70%)] opacity-50"></div>

            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-black">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow relative z-10">
              <span className="px-3 py-1 bg-purple-900/50 border border-purple-500/30 text-xs rounded-full w-fit text-purple-300 font-medium">
                {p.tag}
              </span>
              <h3 className="text-base md:text-lg font-bold mt-2 mb-1 group-hover:text-pink-400 transition">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {p.desc}
              </p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-gray-300 hover:text-pink-400 transition w-fit"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredProjects.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition font-semibold text-sm md:text-base"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
});

export default CaseStudy;
