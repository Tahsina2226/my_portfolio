import type { FC } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";

const Education: FC = () => {
  return (
    <section
      id="education"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
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

      <div className="z-10 relative mx-auto px-6 lg:px-12 max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 mb-4 font-bold text-transparent text-4xl md:text-5xl lg:text-6xl">
            Educational Qualification
          </h2>
          <p className="mx-auto max-w-2xl text-gray-200 text-lg">
            My academic journey and the skills I'm developing alongside my
            studies
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gray-800/80 shadow-2xl backdrop-blur-sm mb-12 p-8 border-amber-400 border-t-4 rounded-3xl overflow-hidden"
        >
          {/* Floating degree cap icon */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="-top-6 -right-6 absolute opacity-10 text-amber-400 text-6xl"
          >
            <FaGraduationCap />
          </motion.div>

          <div className="z-10 relative space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-100 text-lg"
            >
              I am currently pursuing a{" "}
              <span className="font-semibold text-amber-400">
                Bachelor's degree in Computer Science and Engineering (CSE)
              </span>{" "}
              at Premier University. Alongside my studies, I am actively
              exploring web development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-100 text-lg"
            >
              During my coursework, I have gained a solid foundation in{" "}
              <span className="font-semibold text-teal-400">
                data structures, algorithms, and system design
              </span>
              , and have worked on projects using{" "}
              <span className="font-semibold text-purple-400">
                React.js, Node.js, Express.js
              </span>
              , as well as modern frontend tools like{" "}
              <span className="font-semibold text-amber-400">
                Tailwind CSS and JavaScript (ES6+)
              </span>
              .
            </motion.p>
          </div>
        </motion.div>

        {/* Comfortable & Exploring Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="gap-8 grid md:grid-cols-2"
        >
          {/* Comfortable With */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl p-8 border-teal-500 border-l-4 rounded-3xl overflow-hidden"
          >
            <h3 className="bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300 mb-6 font-bold text-transparent text-2xl">
              What I'm Comfortable With
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-500/10 mr-4 p-2 rounded-lg">
                  <FaReact className="text-teal-400 text-2xl" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-100">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <FaReact className="mr-1 text-teal-400" /> React.js
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <DiJavascript className="mr-1 text-yellow-400" />{" "}
                      JavaScript
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <SiTailwindcss className="mr-1 text-cyan-400" /> Tailwind
                      CSS
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-500/10 mr-4 p-2 rounded-lg">
                  <FaNodeJs className="text-teal-400 text-2xl" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-100">
                    Backend & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <FaNodeJs className="mr-1 text-green-500" /> Node.js
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <SiExpress className="mr-1 text-gray-400" /> Express.js
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <FaGitAlt className="mr-1 text-orange-500" /> Git
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <SiPostman className="mr-1 text-orange-400" /> Postman
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Currently Exploring */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl p-8 border-purple-500 border-l-4 rounded-3xl overflow-hidden"
          >
            <h3 className="bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300 mb-6 font-bold text-transparent text-2xl">
              What I'm Exploring
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-500/10 mr-4 p-2 rounded-lg">
                  <SiNextdotjs className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-100">
                    Advanced Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <SiNextdotjs className="mr-1" /> Next.js (SSR)
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <SiTypescript className="mr-1 text-blue-600" /> TypeScript
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      <FaReact className="mr-1 text-teal-400" /> React Hooks
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500/10 mr-4 p-2 rounded-lg">
                  <FaNodeJs className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-100">
                    Backend & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      🚀 Advanced Node.js
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      🏗️ System Design
                    </span>
                    <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-sm">
                      🔐 Authentication
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
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
              className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-purple-500 opacity-20 rounded-full blur"
            ></motion.div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm px-8 py-4 border border-gray-700 rounded-full">
              <h3 className="bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 font-semibold text-transparent text-xl">
                Continuously expanding my knowledge and skills!
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
