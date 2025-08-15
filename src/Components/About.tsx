import type { FC } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Cpu, Rocket, GraduationCap, User } from "lucide-react";

const About: FC = () => {
  // ----- TEXT COLOR & GRADIENT STYLES -----
  const primaryText = "text-gray-200"; // Main readable text
  const secondaryText = "text-gray-400"; // Subtext
  const headingGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-purple-400 to-teal-400";
  const subheadingGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-purple-300";
  const subheadingGradientAlt =
    "bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-purple-300";

  // ----- TEXT CONTENT -----
  const educationText = `I am currently pursuing a Bachelor's degree in Computer Science and Engineering (CSE) at Premier University, Chattogram. Alongside my academic studies, I am immersing myself in the world of web development, learning full-stack technologies and exploring advanced topics like SSR with Next.js and TypeScript for scalable applications.`;

  const aboutText = `I am Tahsina Tanvin, a passionate programming enthusiast and Full Stack Developer. My journey in programming started during my school years when I was introduced to HTML and CSS. Since then, my interest in web development has grown, and I have gradually explored JavaScript, React.js, TypeScript, Redux, Node.js, and PostgreSQL, along with other modern frontend and backend technologies.

My approach to work is grounded in simplicity, efficiency, and user-centric design. I focus on creating clean, functional, and accessible solutions that provide value to users. The most fulfilling part of my work is not only learning new skills but also sharing knowledge to help others grow.

This professional dedication defines who I am. I strive to continuously grow as a developer and embrace new challenges along the way.`;

  // ----- STATE -----
  const [displayedEducation, setDisplayedEducation] = useState("");
  const [displayedAbout, setDisplayedAbout] = useState("");

  // Typing animation for education
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedEducation(educationText.slice(0, index + 1));
      index++;
      if (index === educationText.length) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  // Typing animation for about text, starts after education finishes
  useEffect(() => {
    if (displayedEducation.length !== educationText.length) return;
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedAbout(aboutText.slice(0, index + 1));
      index++;
      if (index === aboutText.length) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, [displayedEducation]);

  return (
    <section
      id="about-me"
      className={`relative flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 md:p-12 lg:p-16 min-h-screen overflow-hidden ${primaryText}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
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

      {/* Floating glow spots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="top-10 left-10 absolute bg-amber-500 blur-3xl rounded-full w-40 h-40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="right-10 bottom-20 absolute bg-purple-500 blur-3xl rounded-full w-60 h-60"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.08, 0.05] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="top-1/3 right-1/4 absolute bg-teal-500 blur-2xl rounded-full w-32 h-32"
      />

      <div className="z-10 relative space-y-12 w-full max-w-5xl">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h1
            className={`${headingGradient} mb-4 font-bold text-5xl md:text-6xl lg:text-7xl`}
          >
            Meet Tahsina
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gradient-to-r from-amber-400 via-purple-400 to-teal-400 mx-auto w-1/2 h-1"
          />
        </motion.div>

        {/* Educational Qualification */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative bg-gray-800/50 hover:bg-gray-800/70 shadow-2xl hover:shadow-amber-400/10 backdrop-blur-sm p-8 md:p-10 border-amber-400 border-l-4 rounded-xl overflow-hidden transition-all duration-300"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
          <div className="z-10 relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-400/20 p-3 rounded-lg">
                <GraduationCap className="text-amber-400" size={24} />
              </div>
              <h2
                className={`${subheadingGradient} font-semibold text-2xl md:text-3xl`}
              >
                Educational Journey
              </h2>
            </div>
            <p
              className={`${primaryText} leading-relaxed md:leading-loose whitespace-pre-wrap`}
            >
              {displayedEducation}
              <span
                className={`inline-block w-2 h-6 bg-amber-500 ml-1 align-middle ${
                  displayedEducation.length === educationText.length
                    ? "opacity-0"
                    : "animate-blink"
                }`}
              ></span>
            </p>
          </div>
        </motion.div>

        {/* Dev Journey Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto mb-6 h-1"
          />
          <h2
            className={`${headingGradient} mb-4 font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight`}
          >
            My Development Journey
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={`mx-auto max-w-2xl ${secondaryText}`}
          >
            From curious beginner to passionate full-stack developer
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-gradient-to-r from-transparent via-teal-400/50 to-transparent mx-auto mt-6 h-1"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative bg-gray-800/50 hover:bg-gray-800/70 shadow-2xl hover:shadow-teal-400/10 backdrop-blur-sm p-8 md:p-10 border-teal-400 border-l-4 rounded-xl overflow-hidden transition-all duration-300"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
          <div className="z-10 relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-400/20 p-3 rounded-lg">
                <User className="text-teal-400" size={24} />
              </div>
              <h2
                className={`${subheadingGradientAlt} font-semibold text-2xl md:text-3xl`}
              >
                My Story
              </h2>
            </div>
            <p
              className={`${primaryText} font-body text-lg md:text-xl leading-relaxed md:leading-loose whitespace-pre-wrap`}
            >
              {displayedAbout}
              <span
                className={`inline-block w-2 h-6 bg-teal-500 ml-1 align-middle ${
                  displayedAbout.length === aboutText.length
                    ? "opacity-0"
                    : "animate-blink"
                }`}
              ></span>
            </p>

            {/* Tech stack indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {[
                {
                  icon: <Code size={18} />,
                  text: "React/TypeScript",
                  color: "bg-amber-500/20 text-amber-300",
                },
                {
                  icon: <Cpu size={18} />,
                  text: "Node.js/Express",
                  color: "bg-purple-500/20 text-purple-300",
                },
                {
                  icon: <Rocket size={18} />,
                  text: "Next.js",
                  color: "bg-teal-500/20 text-teal-300",
                },
                {
                  icon: <BookOpen size={18} />,
                  text: "Continuous Learner",
                  color: "bg-green-500/20 text-green-300",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${item.color}`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
