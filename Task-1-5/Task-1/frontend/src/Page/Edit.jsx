import React, { useState, useEffect } from "react";
import "./Home.css";

function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [github, setGithub] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState("");
  const [softskills, setSoftskills] = useState("");
  const [hobies, setHobies] = useState("");
  const [language, setLanguage] = useState("");
  const [summary, setSummary] = useState("");
  const [projects, setProjects] = useState("");
  const [experience, setExperience] = useState("");

  const [obj, setOBJ] = useState({});

  console.log({ obj });

  useEffect(() => {
    async function fetchResumeData() {
      try {
        await fetch(
          `http://localhost:8080/resume/${localStorage.getItem("id")}`
        )
          .then((res) => res.json())
          .then((res) => {
            setOBJ(res);
            console.log(res);
          });
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    }

    fetchResumeData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataOBJ = {
      name: name || obj.name,
      email: email || obj.email,
      mobile: mobile || obj.mobile,
      image: image || obj.image,
      qualification: qualification || obj.qualification,
      experience: experience || obj.experience,
      github: github || obj.github,
      address: address || obj.address,
      skills: skills || obj.skills,
      softskills: softskills || obj.softskills,
      language: language || obj.language,
      summary: summary || obj.summary,
      projects: projects || obj.projects,
    };

    try {
      await fetch(
        `http://localhost:8080/resume/${localStorage.getItem("id")}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataOBJ),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          window.location.href = "/preview";
          console.log(res);
        });
    } catch (error) {
      console.error("Error updating the resume:", error);
    }
  };

  return (
    <div className="Home_main_container">
      <h1>Edit Resume</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={obj.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={obj.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder={obj.mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder={obj.image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder={obj.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="github">GitHub:</label>
          <input
            type="url"
            id="github"
            name="github"
            placeholder={obj.github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            placeholder={obj.qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder={obj.skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="softskills">Soft Skills:</label>
          <input
            type="text"
            id="softskills"
            name="softskills"
            placeholder={obj.softskills}
            onChange={(e) => setSoftskills(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="hobies">Hobies:</label>
          <input
            type="text"
            id="hobies"
            name="hobies"
            placeholder={obj.hobies}
            onChange={(e) => setHobies(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            name="language"
            placeholder={obj.language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            placeholder={obj.summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="projects">Projects:</label>
          <textarea
            id="projects"
            name="projects"
            placeholder={obj.projects}
            onChange={(e) => setProjects(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <textarea
            id="experience"
            name="experience"
            placeholder={obj.experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Edit;
