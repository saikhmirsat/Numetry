import React from "react";
import { useState } from "react";
import "../Navbar/Navbar.css";

import { ImDownload } from "react-icons/im";
import MobileNav from "./MobileNav";

import Resume from "../Images/fw19_0481-Saikh-Mirsat.pdf";

export default function Navbar({ home, about, skills, projects, contacts }) {
  const [navbar, setNavbar] = useState(false);
  const [navhome, setHome] = useState(false);
  const [navabout, setAbout] = useState(false);
  const [navskill, setSkill] = useState(false);
  const [navproject, setProject] = useState(false);
  const [navcontact, setContact] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handelDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1HxjdMB0DAuU5IfDJJvbWpfoq5d_0oTfp/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div>
      <div className={navbar ? "navbar active" : "navbar"}>
        <div
          className={navhome ? "activeNavItme" : "navitem"}
          onClick={() => {
            home();
            setHome(true);
            setAbout(false);
            setContact(false);
            setSkill(false);
            setProject(false);
          }}
        >
          Home
        </div>
        <div
          className={navabout ? "activeNavItme" : "navitem"}
          onClick={() => {
            about();
            setHome(false);
            setAbout(true);
            setContact(false);
            setSkill(false);
            setProject(false);
          }}
        >
          About Me
        </div>
        <div
          className={navskill ? "activeNavItme" : "navitem"}
          onClick={() => {
            skills();
            setHome(false);
            setAbout(false);
            setContact(false);
            setSkill(true);
            setProject(false);
          }}
        >
          Skills
        </div>
        <div
          className={navproject ? "activeNavItme" : "navitem"}
          onClick={() => {
            projects();
            setHome(false);
            setAbout(false);
            setContact(false);
            setSkill(false);
            setProject(true);
          }}
        >
          Projects
        </div>
        <div
          className={navcontact ? "activeNavItme" : "navitem"}
          onClick={() => {
            contacts();
            setHome(false);
            setAbout(false);
            setContact(true);
            setSkill(false);
            setProject(false);
          }}
        >
          Contacts
        </div>
        <div className="nav-resume-btn">
          {/* <h4>Resume</h4>
                    <ImDownload /> */}
          <a
            href={Resume}
            target="_blank"
            download={"fw19_0481-Saikh-Mirsat"}
            _hover={{ TextDecoder: "none" }}
          >
            <h4 download={Resume} onClick={() => handelDownload()}>
              Resume <ImDownload />
            </h4>
          </a>
        </div>
      </div>
      <div className="mobile_navbar">
        <MobileNav
          home={home}
          about={about}
          skills={skills}
          projects={projects}
          contacts={contacts}
        />
      </div>
    </div>
  );
}
