/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { Code, Palette } from "lucide-react";

const offerings = [
  {
    icon: <Code size={50} />,
    title: "Web Development",
    desc: "Focused on JavaScript frameworks such as React, with experience in developing dynamic, responsive, and user-centric web applications.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Palette size={50} />,
    title: "UI/UX Design",
    desc: "Skilled in UI/UX design, utilizing methodologies including UX Journey, Human-Centered Design, and Design Thinking. Experienced in creating innovative and intuitive user experiences, including work for academic and personal projects.",
    color: "from-pink-500 to-purple-500",
  },
];

export default function Offering() {
  return (
    <section className="py-24 px-10">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          What I’m Offering
        </span>
      </h3>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {offerings.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-12 rounded-2xl bg-gradient-to-br ${item.color} shadow-xl`}
          >
            <div className="mb-6">{item.icon}</div>
            <h4 className="text-2xl md:text-3xl font-semibold">{item.title}</h4>
            <p className="text-base md:text-lg mt-4">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
