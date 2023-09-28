import { useRef } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Navbar from './Navbar/Navbar';

function App() {

  const refHome = useRef(null)
  const refAbout = useRef(null)
  const refSkills = useRef(null)
  const refProjects = useRef(null)
  const refContacts = useRef(null)

  const home = () => {
    refHome.current.scrollIntoView({ behavior: 'smooth' })
  }
  const about = () => {
    refAbout.current.scrollIntoView({ behavior: 'smooth' })
  }
  const skills = () => {
    refSkills.current.scrollIntoView({ behavior: 'smooth' })
  }
  const projects = () => {
    refProjects.current.scrollIntoView({ behavior: 'smooth' })
  }
  const contacts = () => {
    refContacts.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Navbar home={home} about={about} skills={skills} projects={projects} contacts={contacts} />
      <div ref={refHome}>
        <Home />
      </div>
      <div ref={refAbout}>
        <About />

      </div>
      <div ref={refSkills}>
        <Skills />

      </div>
      <div ref={refProjects}>
        <Projects />

      </div>
      <div ref={refContacts}>
        <Contact />

      </div>
    </div>
  );
}

export default App;
