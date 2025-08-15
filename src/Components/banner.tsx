import React, { FC, useEffect, useState } from "react";
import Navbar from "./Navbar";

const Banner: FC = () => {
  const name = "Tahsina Tanvin";
  const role = "Computer Science & Engineering Student | Full Stack Developer";
  const aboutMe =
    "I am a motivated and detail-oriented Computer Science and Engineering student with a strong foundation in frontend and backend development, problem-solving, and teamwork. I'm passionate about building scalable web applications and solving real-world challenges through technology. Currently, I am exploring DevOps practices to become a proficient full-stack developer.";

  const [displayedName, setDisplayedName] = useState("");
  const [displayedRole, setDisplayedRole] = useState("");
  const [displayedAbout, setDisplayedAbout] = useState("");
  const [showCV, setShowCV] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let nameIndex = 0;
    let roleIndex = 0;
    let aboutIndex = 0;

    const nameInterval = setInterval(() => {
      setDisplayedName(name.slice(0, nameIndex + 1));
      nameIndex++;
      if (nameIndex === name.length) clearInterval(nameInterval);
    }, 100);

    const roleDelay = setTimeout(() => {
      const roleInterval = setInterval(() => {
        setDisplayedRole(role.slice(0, roleIndex + 1));
        roleIndex++;
        if (roleIndex === role.length) clearInterval(roleInterval);
      }, 50);
    }, name.length * 100 + 300);

    const aboutDelay = setTimeout(() => {
      const aboutInterval = setInterval(() => {
        setDisplayedAbout(aboutMe.slice(0, aboutIndex + 1));
        aboutIndex++;
        if (aboutIndex === aboutMe.length) {
          clearInterval(aboutInterval);
          setShowCV(true);
          setShowSocial(true);
        }
      }, 10);
    }, name.length * 100 + role.length * 50 + 800);

    return () => {
      clearInterval(nameInterval);
      clearTimeout(roleDelay);
      clearTimeout(aboutDelay);
    };
  }, []);

  return (
    <div className="relative flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-hidden font-sans text-gray-200">
      {/* Subtle background elements */}
      <div className="top-20 left-20 absolute bg-amber-500/5 blur-3xl rounded-full w-40 h-40 animate-pulse"></div>
      <div className="right-1/4 bottom-1/4 absolute bg-emerald-500/5 blur-3xl rounded-full w-60 h-60 animate-pulse delay-1000"></div>
      <div className="top-1/3 left-1/3 absolute bg-purple-500/5 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1500"></div>

      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Content */}
      <main className="z-10 relative flex lg:flex-row flex-col flex-1 justify-center items-start lg:space-x-12 space-y-12 lg:space-y-0 mx-auto px-6 md:px-12 py-12 md:py-20 max-w-7xl">
        {/* Left Side */}
        <div className="flex-1 space-y-8 max-w-2xl">
          {/* Name & Role */}
          <section id="hello" className="mt-4">
            <h1 className="font-bold text-gray-100 text-4xl md:text-5xl lg:text-6xl tracking-tight">
              {displayedName}
              <span
                className={`inline-block w-2 h-12 bg-amber-400 ml-1 align-middle ${
                  displayedName.length === name.length
                    ? "opacity-0"
                    : "animate-blink"
                }`}
              ></span>
            </h1>
            <p className="mt-4 font-medium text-gray-400 text-lg md:text-xl lg:text-2xl italic">
              {displayedRole}
              <span
                className={`inline-block w-2 h-6 bg-emerald-400 ml-1 align-middle ${
                  displayedRole.length === role.length
                    ? "opacity-0"
                    : "animate-blink"
                }`}
              ></span>
            </p>

            {/* Contact info */}
            <div className="flex flex-col space-y-3 mt-6 text-gray-300">
              <div className="group flex items-center space-x-3">
                <span className="flex justify-center items-center bg-gray-700/50 group-hover:bg-amber-500/20 rounded-full w-8 h-8 group-hover:text-amber-400 transition-all">
                  📍
                </span>
                <span className="group-hover:text-amber-300 transition-all">
                  Chattogram, Bangladesh
                </span>
              </div>
              <div className="group flex items-center space-x-3">
                <span className="flex justify-center items-center bg-gray-700/50 group-hover:bg-emerald-500/20 rounded-full w-8 h-8 group-hover:text-emerald-400 transition-all">
                  ✉️
                </span>
                <span className="group-hover:text-emerald-300 transition-all">
                  tahsinatanvin274@gmail.com
                </span>
              </div>
              <div className="group flex items-center space-x-3">
                <span className="flex justify-center items-center bg-gray-700/50 group-hover:bg-purple-500/20 rounded-full w-8 h-8 group-hover:text-purple-400 transition-all">
                  📞
                </span>
                <span className="group-hover:text-purple-300 transition-all">
                  +880 1859 702848
                </span>
              </div>
            </div>

            {/* Social links fade-in */}
            <div
              className={`mt-8 flex space-x-6 transition-all duration-700 ${
                showSocial ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tahsina-tanvin-8a49162b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-gray-700 hover:bg-amber-500/10 hover:shadow-amber-500/20 hover:shadow-lg border border-gray-600 hover:border-amber-400/30 rounded-full w-12 h-12 text-amber-300 transition-all hover:-translate-y-1 transform"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Tahsina2226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-gray-700 hover:bg-emerald-500/10 hover:shadow-emerald-500/20 hover:shadow-lg border border-gray-600 hover:border-emerald-400/30 rounded-full w-12 h-12 text-emerald-300 transition-all hover:-translate-y-1 transform"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-gray-700 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20 border border-gray-600 hover:border-purple-400/30 rounded-full w-12 h-12 text-purple-300 transition-all hover:-translate-y-1 transform"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </section>

          {/* About Me Section */}
          <section
            id="about-me"
            className={`mt-8 transition-all duration-700 ${
              displayedAbout.length > 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="font-semibold text-gray-100 text-2xl">About Me</h2>
            <div className="bg-gradient-to-r from-amber-500 to-emerald-500 shadow-sm my-3 rounded-full w-24 h-1.5"></div>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
              {displayedAbout}
              <span
                className={`inline-block w-2 h-6 bg-purple-400 ml-1 align-middle ${
                  displayedAbout.length === aboutMe.length
                    ? "opacity-0"
                    : "animate-blink"
                }`}
              ></span>
            </p>
          </section>
        </div>

        {/* Right Side - CV Card */}
        <div className="flex flex-col justify-start items-center lg:items-end w-full lg:w-auto">
          <div
            className={`relative bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg border border-gray-700 shadow-2xl p-8 rounded-2xl w-full lg:w-80 transform transition-all duration-700 ${
              showCV ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            } hover:scale-[1.02] hover:shadow-amber-500/10 group overflow-hidden`}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-[0.02]"></div>
            <div className="-top-10 -right-10 absolute bg-amber-500/5 blur-xl rounded-full w-32 h-32"></div>
            <div className="-bottom-8 -left-8 absolute bg-purple-500/5 blur-xl rounded-full w-24 h-24"></div>

            <div className="z-10 relative">
              <div className="flex justify-center mb-6">
                <div className="flex justify-center items-center bg-gradient-to-br from-amber-500/10 to-amber-600/10 shadow-inner border border-amber-500/20 rounded-full w-24 h-24 text-4xl">
                  👩‍💻
                </div>
              </div>

              <p className="mb-6 font-semibold text-gray-100 text-xl text-center">
                Download My Resume
              </p>

              <a
                href="../../public/cv/TAHSINA TANVIN's_Resume.pdf"
                download
                className="group flex justify-center items-center bg-gradient-to-r from-amber-600/80 hover:from-amber-500 to-amber-700 hover:to-amber-600 shadow-md hover:shadow-amber-500/20 px-6 py-3 rounded-lg w-full font-semibold text-white transition-all hover:-translate-y-1 transform"
              >
                <svg
                  className="mr-2 w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
