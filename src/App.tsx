import React from "react";
import Banner from "./Components/banner"; // <-- no .tsx extension needed
import About from "./Components/About";
import Skills from "./Components/Skills";
// import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
const App: React.FC = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      {/* <Education /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
