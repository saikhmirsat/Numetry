import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Preview.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

function Preview() {
  const [resumeData, setResumeData] = useState(null);

  const Navigate = useNavigate();

  useEffect(() => {
    
    const id = localStorage.getItem("id");

    async function fetchResumeData() {
      try {
        const response = await fetch(`http://localhost:8080/resume/${id}`);
        if (response.ok) {
          const data = await response.json();
          setResumeData(data);
        } else {
          console.error("Failed to fetch resume data");
        }
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    }

    fetchResumeData();
  }, []);

  const handleEditClick = () => {
    const id = localStorage.getItem("id");
    Navigate(`/edit/${id}`);
  };

  return (
    <div className="Resume_main_box">
      <h2>Resume </h2>
      {resumeData ? (
        <div className="Resume_box">
          <div className="First_container_resume">
            <div className="Image_div_res">
              <img src={resumeData.image} alt="" />
            </div>
            <div className="name_div_res">
              <h1>{resumeData.name}</h1>
            </div>
          </div>
          <div className="Resume_secon_con">
            <div>
              <div className="Contact_section">
                <h3>CONTACT ME</h3>
                <div className="Caonctact_icon_div">
                  <HiOutlineMailOpen color="Royalblue" />
                  <p>{resumeData.email}</p>
                </div>
                <div className="Caonctact_icon_div">
                  <AiOutlineHome color="Royalblue" />
                  <p>{resumeData.address}</p>
                </div>
                <div className="Caonctact_icon_div">
                  <AiOutlinePhone color="Royalblue" />
                  <p>{resumeData.mobile}</p>
                </div>
                <div className="Caonctact_icon_div">
                  <AiFillGithub color="Royalblue" />
                  <a href="https://github.com/saikhmirsat">Github</a>
                </div>
              </div>

              <div className="Contact_section">
                <h3>EDUCATION</h3>*
                <p>
                  ➤<b>{resumeData.qualification}</b>
                </p>
              </div>

              <div className="Contact_section">
                <h3>TECHNICAL SKILLS</h3>

                <p>
                  ➤<b>{resumeData.skills}</b>
                </p>
              </div>

              <div className="Contact_section">
                <h3>SOFT SKILLS</h3>

                <p>
                  ➤<b>{resumeData.softskills}</b>
                </p>
              </div>
              <div className="Contact_section">
                <h3>HOBIES</h3>

                <p>
                  ➤<b>{resumeData.hobies}</b>
                </p>
              </div>
              <div className="Contact_section">
                <h3>LANGUAGE</h3>

                <p>
                  ➤<b>{resumeData.language}</b>
                </p>
              </div>
            </div>

            <div>
              <div className="Contact_section">
                <h3>PROFESSIONAL SUMMARY</h3>
                <p>
                  ➤<b>{resumeData.summary}</b>
                </p>
              </div>
              <div className="Contact_section">
                <h3>WORK EXPERIENCE</h3>
                <p>
                  ➤<b>{resumeData.experience}</b>
                </p>
              </div>

              <div className="Contact_section">
                <h3>Projects</h3>
                <p>
                  ➤ <b>{resumeData.projects}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button  onClick={handleEditClick}>Edit</button>{" "}
      {/* Add the "Edit" button */}
    </div>
  );
}

export default Preview;
