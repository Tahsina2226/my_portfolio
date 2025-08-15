import React from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import { BsGearFill } from "react-icons/bs";

// Skill icons mapping
const skillIcons = {
  "React.js": <FaReact className="text-teal-400" />,
  "Next.js": <SiNextdotjs className="text-gray-200" />,
  "JavaScript (ES6+)": <DiJavascript className="text-amber-400" />,
  TypeScript: <SiTypescript className="text-purple-400" />,
  HTML5: <DiHtml5 className="text-orange-400" />,
  CSS3: <DiCss3 className="text-purple-300" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-300" />,
  Redux: <SiRedux className="text-purple-500" />,
  "Redux Toolkit Query (RTK Query)": <SiRedux className="text-purple-300" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
  "Express.js": <FaNodeJs className="text-gray-400" />,
  "MongoDB (with Mongoose)": <FaDatabase className="text-green-400" />,
  PostgreSQL: <FaDatabase className="text-purple-400" />,
  MySQL: <FaDatabase className="text-amber-400" />,
  "Firebase Authentication": <BsGearFill className="text-amber-400" />,
  "Context API": <BsGearFill className="text-teal-300" />,
  Git: <BsGearFill className="text-amber-400" />,
  GitHub: <BsGearFill className="text-gray-100" />,
  Postman: <BsGearFill className="text-orange-400" />,
  LocalStorage: <BsGearFill className="text-teal-300" />,
  Mongoose: <FaDatabase className="text-green-300" />,
};

const SkillCard: FC<{
  title: string;
  items: string[];
  color: string;
  icon: React.ReactNode;
}> = ({ title, items, color, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl hover:shadow-${color}-500/20 transition-all border-t-4 border-${color}-500 overflow-hidden group`}
    >
      {/* Animated border bottom */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-${color}-500 to-transparent w-full group-hover:from-${color}-400 group-hover:to-${color}-600 transition-all duration-500`}
      ></div>

      {/* Floating icon */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-6 -right-6 text-6xl opacity-10 text-${color}-400`}
      >
        {icon}
      </motion.div>

      <div className="z-10 relative">
        <div className="flex items-center mb-6">
          <div className={`p-3 rounded-lg bg-${color}-500/10 mr-4`}>
            {React.cloneElement(icon as React.ReactElement, {
              className: `text-3xl text-${color}-400`,
            })}
          </div>
          <h3 className="bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 font-bold text-transparent text-2xl">
            {title}
          </h3>
        </div>

        <ul className="space-y-4">
          {items.map((skill) => (
            <motion.li
              key={skill}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                x: 5,
                color: "var(--tw-text-white)",
              }}
              className="flex items-center hover:bg-gray-700/50 px-3 py-2 rounded-lg transition-all cursor-default"
            >
              <span className="mr-3 text-lg">
                {skillIcons[skill as keyof typeof skillIcons] || <BsGearFill />}
              </span>
              <span className="text-gray-100">{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Skill: FC = () => {
  const skills = {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Redux Toolkit Query (RTK Query)",
    ],
    backend: ["Node.js", "Express.js"],
    databases: ["MongoDB (with Mongoose)", "PostgreSQL", "MySQL"],
    tools: [
      "Firebase Authentication",
      "Context API",
      "Git",
      "GitHub",
      "Postman",
      "LocalStorage",
      "Mongoose",
    ],
  };

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden"
    >
      {/* Animated background particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bg-white/10 rounded-full"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="z-10 relative mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 mb-4 font-bold text-transparent text-4xl md:text-5xl lg:text-6xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-2xl text-gray-200 text-lg">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Frontend"
            items={skills.frontend}
            color="purple"
            icon={<FaReact />}
          />

          <SkillCard
            title="Backend"
            items={skills.backend}
            color="amber"
            icon={<FaNodeJs />}
          />

          <SkillCard
            title="Databases"
            items={skills.databases}
            color="green"
            icon={<FaDatabase />}
          />

          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-3"
          >
            <SkillCard
              title="Tools & Technologies"
              items={skills.tools}
              color="teal"
              icon={<FaTools />}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-amber-500 to-teal-500 opacity-20 rounded-full blur"
            ></motion.div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm px-8 py-4 border border-gray-700 rounded-full">
              <h3 className="bg-clip-text bg-gradient-to-r from-purple-400 via-amber-400 to-teal-400 font-semibold text-transparent text-xl">
                Always learning new technologies!
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
