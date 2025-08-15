import React, { FC } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Code, LayoutTemplate } from "lucide-react";

interface Project {
  title: string;
  description: string[];
  live: string;
  clientRepo: string;
  serverRepo: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "FeedbackLoop – Service & Review Management Platform",
    description: [
      "Implemented user authentication via Firebase with Email and Google sign-in options.",
      "Developed full CRUD operations for managing services and customer reviews.",
      "Secured user data with JWT-based authentication for real-time protected API access.",
    ],
    live: "https://feedbackloop-a1de2.web.app",
    clientRepo: "https://github.com/Tahsina2226/-FeedbackLoop",
    serverRepo: "https://github.com/Tahsina2226/feedbackloop-server",
    techStack: ["React", "Firebase", "Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Library Management System – Full-stack Application",
    description: [
      "Built a full-featured library management system using React, TypeScript, Redux Toolkit Query, and Tailwind CSS.",
      "Developed a scalable backend with Express.js, MongoDB, and Mongoose, implementing RESTful APIs.",
      "Integrated real-time updates and due date validation, improving data consistency.",
    ],
    live: "https://library-management-projects.vercel.app",
    clientRepo:
      "https://github.com/Tahsina2226/library-management-system-client",
    serverRepo:
      "https://github.com/Tahsina2226/library-management-system-server",
    techStack: ["TypeScript", "Redux", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "CinemaScope – Dynamic Movie Browsing Platform",
    description: [
      "Built a dynamic platform for real-time movie browsing with an interactive and responsive UI.",
      "Integrated Firebase Authentication for secure user login and personalized access.",
      "Implemented customizable movie lists with rating and review features.",
    ],
    live: "https://movie-potral.web.app/",
    clientRepo:
      "https://github.com/programming-hero-web-course2/b10-a10-client-side-Tahsina2226",
    serverRepo:
      "https://github.com/programming-hero-web-course2/b10-a10-server-side-Tahsina2226",
    techStack: ["React", "Firebase", "TMDB API", "Tailwind", "React Query"],
  },
];

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Code size={24} />
          </motion.div>
        ))}
      </div>

      <div className="z-10 relative mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 mb-4 font-bold text-transparent text-4xl md:text-5xl lg:text-6xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-2xl text-gray-200 text-lg">
            A showcase of my full-stack development work with modern
            technologies
          </p>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-6"
          >
            <div className="flex space-x-4">
              <div className="flex items-center text-amber-400">
                <Star className="fill-amber-400 mr-1" size={18} />
                <span>React</span>
              </div>
              <div className="flex items-center text-purple-400">
                <Star className="fill-purple-400 mr-1" size={18} />
                <span>Node.js</span>
              </div>
              <div className="flex items-center text-teal-400">
                <Star className="fill-teal-400 mr-1" size={18} />
                <span>TypeScript</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between bg-gray-800/50 hover:bg-gray-800/70 shadow-xl hover:shadow-2xl hover:shadow-teal-400/10 backdrop-blur-sm p-6 border-amber-400 border-l-4 rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Project glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>

              <div className="z-10 relative">
                <div className="flex justify-between items-start mb-4">
                  <LayoutTemplate
                    className="flex-shrink-0 mt-1 mr-3 text-amber-400"
                    size={24}
                  />
                  <h3 className="flex-1 bg-clip-text bg-gradient-to-r from-teal-300 to-purple-300 mb-3 font-bold text-transparent text-xl">
                    {project.title}
                  </h3>
                </div>

                <ul className="space-y-3 mb-6 text-gray-300 text-sm">
                  {project.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + index * 0.2 }}
                      className="flex items-start"
                    >
                      <span className="mr-2 text-teal-400">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700/50 px-2 py-1 border border-gray-600 rounded-full text-gray-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="z-10 relative flex flex-wrap gap-3 mt-4">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/link flex items-center gap-2 bg-teal-500/20 hover:bg-teal-500/30 px-4 py-2 rounded-lg text-teal-300 transition"
                >
                  <ExternalLink
                    size={16}
                    className="group-hover/link:animate-pulse"
                  />
                  <span>Live Demo</span>
                </motion.a>

                <motion.a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/link flex items-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 px-4 py-2 rounded-lg text-purple-300 transition"
                >
                  <Github
                    size={16}
                    className="group-hover/link:animate-pulse"
                  />
                  <span>Client</span>
                </motion.a>

                {project.serverRepo && (
                  <motion.a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/link flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 px-4 py-2 rounded-lg text-amber-300 transition"
                  >
                    <Github
                      size={16}
                      className="group-hover/link:animate-pulse"
                    />
                    <span>Server</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Tahsina2226"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-amber-500/20 px-6 py-3 border border-gray-700 hover:border-teal-400 rounded-full text-gray-300 hover:text-white transition-all"
          >
            <span>View More Projects</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
