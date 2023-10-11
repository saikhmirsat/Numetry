import React, { useState } from "react";
import "../Navbar/Navbar.css";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const [subjectName, setSubjectName] = useState("");

  const [languageType, setLanguageType] = useState("");
  const [NoOfCredits, setNoOfCredits] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    const obj = {
      subjectName,

      languageType,
      NoOfCredits,
    };

    try {
      await fetch(`http://localhost:3000/students`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          alert("Your subject is created");
          console.log(res);

          setSubjectName("");
          setLanguageType("");
          setNoOfCredits(null);

          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
    closeModal();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link  text-white  dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subject
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button className="dropdown-item" onClick={openModal}>
                    Create Subject
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
       >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Subject</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="subjectName"
                    placeholder="Subject Name"
                    onChange={(e) => setSubjectName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="languageType"
                    placeholder="Language Type"
                    onChange={(e) => setLanguageType(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="NoOfCredits"
                    onChange={(e) => setNoOfCredits(e.target.value)}
                    placeholder=" No. of Credits"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
