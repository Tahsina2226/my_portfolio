import React, { FC, useEffect, useState } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hello");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMobileLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  const handleDesktopLinkClick = (id: string) => {
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["hello", "about-me", "projects", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navItems = [
    { id: "hello", label: "_hello", color: "amber" },
    { id: "about-me", label: "_about-me", color: "emerald" },
    { id: "projects", label: "_projects", color: "purple" },
    { id: "skills", label: "_skills", color: "amber" },
    { id: "contact", label: "_contact", color: "emerald" },
  ];

  return (
    <>
      {/* Custom cursor effect */}
      <div
        className="hidden md:block z-50 fixed bg-white/80 rounded-full w-6 h-6 transition-transform -translate-x-1/2 -translate-y-1/2 duration-100 ease-out pointer-events-none mix-blend-difference transform"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: menuOpen ? "scale(3)" : "scale(1)",
        }}
      ></div>

      <header
        className={`z-40 fixed w-full flex justify-between items-center transition-all duration-500 ${
          scrolled ? "bg-gray-900/95 py-3 shadow-2xl" : "bg-transparent py-4"
        } px-6 border-b ${
          scrolled ? "border-gray-800/70" : "border-transparent"
        } backdrop-blur-md`}
      >
        {/* Animated Logo */}
        <div
          className="group relative cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("hello");
          }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-emerald-400 opacity-0 group-hover:opacity-60 blur-md rounded-full transition-all duration-500"></div>
          <div className="relative flex items-center">
            <span className="mr-1 text-gray-300"></span>
            <span className="bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-300 font-bold text-transparent text-lg tracking-wider">
              Tahsina_Tanvin
            </span>
            <span className="ml-2 text-emerald-300/70 text-xs animate-pulse">
              DEV
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? `text-${item.color}-300`
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => handleDesktopLinkClick(item.id)}
              data-cursor-stick
              data-cursor-stick-size="60px"
            >
              <span
                className={`absolute -left-4 opacity-0 ${
                  activeSection === item.id
                    ? "opacity-100"
                    : "group-hover:opacity-100"
                } text-${item.color}-400 transition-all duration-300`}
              >
                &gt;
              </span>
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-${
                  item.color
                }-400/0 via-${item.color}-400 to-${item.color}-400/0 ${
                  activeSection === item.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                } transition-all duration-300`}
              ></span>
              {activeSection === item.id && (
                <span className="-bottom-1 left-0 absolute bg-white w-full h-px animate-pulse"></span>
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="group bg-gradient-to-r from-amber-500 to-emerald-500 hover:shadow-amber-500/30 hover:shadow-lg ml-6 px-5 py-2.5 rounded-full text-white hover:scale-105 transition-all duration-300 transform"
          >
            <span className="z-10 relative">Hire Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-emerald-600 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
          </a>
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <button
          className={`md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center transition-all duration-300 ${
            menuOpen ? "text-white" : "text-gray-300"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>

        {/* Animated Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-30 flex flex-col items-center justify-center space-y-10 bg-gradient-to-br from-gray-900 to-gray-800 transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1)] ${
            menuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          {navItems.map((item, index) => (
            <button
              key={item.id}
              className={`relative text-2xl font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? `text-${item.color}-300`
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => handleMobileLinkClick(item.id)}
              style={{
                transitionDelay: menuOpen ? `${index * 100 + 300}ms` : "0ms",
                transform: menuOpen
                  ? "translateY(0)"
                  : `translateY(${index * -10}px)`,
                opacity: menuOpen ? 1 : 0,
              }}
            >
              <span
                className={`absolute -left-8 opacity-0 ${
                  activeSection === item.id
                    ? "opacity-100"
                    : "group-hover:opacity-100"
                } text-${item.color}-400 transition-all duration-300`}
              >
                &gt;
              </span>
              {item.label.replace("_", "")}
              {activeSection === item.id && (
                <span className="-bottom-2 left-0 absolute bg-current w-full h-0.5 animate-pulse"></span>
              )}
            </button>
          ))}

          <button
            className="bg-gradient-to-r from-amber-500 to-emerald-500 hover:shadow-amber-500/30 hover:shadow-lg mt-8 px-8 py-3.5 rounded-full text-white hover:scale-105 transition-all duration-300 transform"
            onClick={() => handleMobileLinkClick("contact")}
            style={{
              transitionDelay: menuOpen
                ? `${navItems.length * 100 + 300}ms`
                : "0ms",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            Hire Me
          </button>

          {/* Social links with hover effects */}
          <div
            className="flex space-x-8 mt-12"
            style={{
              transitionDelay: menuOpen
                ? `${navItems.length * 100 + 400}ms`
                : "0ms",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {["github", "linkedin", "twitter", "dribbble"].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div className="flex justify-center items-center bg-gray-700/50 group-hover:bg-gradient-to-br from-amber-400/20 to-emerald-400/20 rounded-full w-10 h-10 transition-all duration-300">
                  <span className="text-lg">
                    {social.charAt(0).toUpperCase()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
