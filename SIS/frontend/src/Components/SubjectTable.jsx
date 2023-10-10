import React, { useState, useEffect } from "react";

function SubjectTable() {
  const [subjects, setSubjects] = useState([]);
  const [editSubject, setEditSubject] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/students");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSubjects(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    const subjectToEdit = subjects.find((subject) => subject.id === id);

    setEditSubject(subjectToEdit);

    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditSubject(null);
  };

  const handleSaveEdit = async () => {
    if (!editSubject) return;

    try {
      const response = await fetch(
        `http://localhost:3000/students/${editSubject.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editSubject),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save the edit");
      }

      setShowAlert(true);
      handleCloseEditModal();

      setTimeout(() => {
        setShowAlert(false);
        setShowEditModal(false);
        setEditSubject(null);
      }, 2000);
      fetchData();
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the subject");
      }

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      fetchData();
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  return (
    <div>
      <h2
        className="table-heading"
        style={{ marginBottom: "30px", textAlign: "left" }}
      >
        Subject List
      </h2>
      {showAlert && (
        <div className="alert alert-success mt-3" role="alert">
          Operation successful!
        </div>
      )}
      <div className="table-responsive ">
        <table className="table table-bordered">
          <thead className="table-heading table-primary">
            <tr>
              <th>Sequence No.</th>
              <th>Subject Name</th>
              <th>No of Credits</th>
              <th>Master Subject/Subjects Group</th>
              <th>Skill Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.id}</td>
                <td>{subject.subjectName}</td>
                <td>{subject.NoOfCredits}</td>
                <td></td>
                <td></td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(subject.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(subject.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editSubject && (
        <div
          className={`modal fade ${showEditModal ? "show" : ""}`}
          tabIndex="-1"
          style={{ display: showEditModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Subject</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseEditModal}
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
                      value={editSubject.subjectName}
                      onChange={(e) =>
                        setEditSubject({
                          ...editSubject,
                          subjectName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="languageType"
                      placeholder="Language Type"
                      value={editSubject.languageType}
                      onChange={(e) =>
                        setEditSubject({
                          ...editSubject,
                          languageType: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="NoOfCredits"
                      placeholder="No. of Credits"
                      value={editSubject.NoOfCredits}
                      onChange={(e) =>
                        setEditSubject({
                          ...editSubject,
                          NoOfCredits: e.target.value,
                        })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseEditModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubjectTable;
