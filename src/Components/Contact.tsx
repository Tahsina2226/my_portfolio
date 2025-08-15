import React, { FC } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
  Send,
  User,
  Code2,
  Cpu,
} from "lucide-react";

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
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
            <Code2 size={24} />
          </motion.div>
        ))}
      </div>

      <div className="z-10 relative mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <h2 className="bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 font-bold text-transparent text-4xl md:text-5xl lg:text-6xl">
                Summary & Contact
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="bottom-0 left-0 absolute bg-gradient-to-r from-teal-400/50 via-purple-400/50 to-amber-400/50 h-1"
              />
            </div>
          </motion.div>
          <p className="mx-auto mt-6 max-w-3xl text-gray-300 text-lg leading-relaxed">
            Full-stack developer in the making with a strong foundation in data
            structures, algorithms, and modern web tech. I enjoy building clean,
            scalable apps with React/TypeScript on the frontend and Node/Express
            on the backend.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="gap-8 grid md:grid-cols-2">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-gray-800/50 hover:bg-gray-800/70 shadow-xl hover:shadow-2xl hover:shadow-amber-400/10 backdrop-blur-sm p-8 border-amber-400 border-l-4 rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>

            <div className="z-10 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-400/20 p-2 rounded-lg">
                  <User className="text-amber-400" size={24} />
                </div>
                <h3 className="bg-clip-text bg-gradient-to-r from-amber-300 to-purple-300 font-semibold text-transparent text-2xl">
                  Professional Snapshot
                </h3>
              </div>

              <ul className="space-y-4 pl-2 text-gray-200">
                {[
                  "Comfortable with React.js, TypeScript, Tailwind CSS",
                  "Backend with Node.js, Express.js; MongoDB (Mongoose)",
                  "Hands-on with Git, Postman; JWT auth & REST APIs",
                  "Exploring SSR (Next.js) and advanced React patterns",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                    className="flex items-start"
                  >
                    <span className="mt-1 mr-3 text-amber-400">▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/link inline-flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 mt-8 px-5 py-3 rounded-lg text-amber-300 transition"
              >
                <span>View Projects</span>
                <ArrowRight
                  size={16}
                  className="group-hover/link:animate-pulse"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-gray-800/50 hover:bg-gray-800/70 shadow-xl hover:shadow-2xl hover:shadow-teal-400/10 backdrop-blur-sm p-8 border-teal-400 border-l-4 rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>

            <div className="z-10 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-400/20 p-2 rounded-lg">
                  <Send className="text-teal-400" size={24} />
                </div>
                <h3 className="bg-clip-text bg-gradient-to-r from-teal-300 to-purple-300 font-semibold text-transparent text-2xl">
                  Get in Touch
                </h3>
              </div>

              <div className="space-y-5 pl-2 text-gray-100">
                {[
                  {
                    icon: <MapPin size={20} />,
                    text: "Chattogram, Bangladesh",
                  },
                  {
                    icon: <Mail size={20} />,
                    text: "tahsinatanvin274@gmail.com",
                    link: "mailto:tahsinatanvin274@gmail.com",
                  },
                  {
                    icon: <Phone size={20} />,
                    text: "01859702848",
                    link: "tel:01859702848",
                  },
                  {
                    icon: <Cpu size={20} />,
                    text: "Available for freelance work",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-0.5 text-teal-400">{item.icon}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="hover:text-white hover:underline transition"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </motion.div>
                ))}

                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    {
                      icon: <Linkedin size={18} />,
                      text: "LinkedIn",
                      url: "https://www.linkedin.com/in/tahsina-tanvin-8a49162b3/",
                      color:
                        "bg-teal-500/20 hover:bg-teal-500/30 text-teal-300",
                    },
                    {
                      icon: <Github size={18} />,
                      text: "GitHub",
                      url: "https://github.com/Tahsina2226",
                      color:
                        "bg-purple-500/20 hover:bg-purple-500/30 text-purple-300",
                    },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: 0.1 * i + 0.5 }}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg ${item.color} transition group/link`}
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-6"
                >
                  <a
                    href="mailto:tahsinatanvin274@gmail.com"
                    className="group/link inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 hover:from-teal-500/30 to-amber-500/20 hover:to-amber-500/30 px-5 py-3 border border-gray-700 hover:border-teal-400 rounded-lg text-gray-100 transition"
                  >
                    <span>Send me a message</span>
                    <Send
                      size={16}
                      className="group-hover/link:animate-bounce"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.05, scale: 0.9 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="-z-10 absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="right-10 -bottom-24 absolute bg-amber-500/20 blur-3xl rounded-full w-80 h-80" />
        <div className="-top-20 -left-10 absolute bg-teal-500/20 blur-3xl rounded-full w-80 h-80" />
        <div className="top-1/2 left-1/2 absolute bg-purple-500/20 blur-3xl rounded-full w-60 h-60" />
      </motion.div>
    </section>
  );
};

export default Contact;
