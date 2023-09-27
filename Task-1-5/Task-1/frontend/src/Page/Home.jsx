import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    image: "",
    address: "",
    github: "",
    qualification: "",
    skills: "",
    softskills: "",
    hobies: "",
    language: "",
    summary: "",
    projects: "",
    experience: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Send formData to the server to save in the database
      await fetch("http://localhost:8080/resume/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((res) => {
          alert(res.msg);
          console.log(res);
          window.location.href = `/preview/`;

          // Assuming you have a value stored in the variable 'res._id'
          const idToStore = res.newResume._id;

          // Store the 'idToStore' in localStorage with the key 'id'
          localStorage.setItem("id", idToStore);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const GotoAllresumeFunc = () => {
    navigate("/allresumes");
  };

  return (
    <div className="Home_main_container">
      <h1>Resume Builder</h1>
      <button className="seeAll_resume" onClick={GotoAllresumeFunc}>
        See Your All Resume
      </button>
      <form onSubmit={handleSubmit}>
        {/* Input fields for each field in formData */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="github">GitHub:</label>
          <input
            type="url"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="softskills">Soft Skills:</label>
          <input
            type="text"
            id="softskills"
            name="softskills"
            value={formData.softskills}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="hobies">Hobies:</label>
          <input
            type="text"
            id="hobies"
            name="hobies"
            value={formData.hobies}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="projects">Projects:</label>
          <textarea
            id="projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Home;
