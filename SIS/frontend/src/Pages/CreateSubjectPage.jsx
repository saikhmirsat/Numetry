import React, { useEffect, useState } from "react";
import "../Style/CreateSubjectPage.css";
import { BiSolidPlusSquare } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

export default function CreateSubjectPage() {
  const [nursary, setNursary] = useState(true);
  const [ukg, setUkg] = useState(false);
  const [lkg, setLkg] = useState(false);
  const data = [];
  const [languageData, setLanguageData] = useState([]);
  const [showAddingAlert, setshowAddingAlert] = useState(false);
  const [showDeletingAlert, setshowDeletingAlert] = useState(false);
  const [showEditAlert, setShowEditAlert] = useState(false);

  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const [sequence, setSequence] = useState(0);
  const [languageType, setLanguageType] = useState("");
  const [NoOfCredits, setNoOfCredits] = useState(null);
  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

  //   ==========Language Edit Modal==========
  const [languageEditModalOpen, setLanguageEditModalOpen] = useState(false);
  const [editSubjectName, setEditSubjectName] = useState("");
  const [editLanguageType, setEditLanguageType] = useState("");
  const [editSequence, setEditSequence] = useState(0);
  const [editCredits, setEditCredits] = useState(null);
  const [editLanguageId, setEditLanguageId] = useState(null);

  const EditFunc = (id) => {
    const languageToEdit = languageData.find((language) => language.id === id);

    if (languageToEdit) {
      setEditLanguageId(id);
      setEditSubjectName(languageToEdit.subjectName);
      setEditLanguageType(languageToEdit.languageType);
      setEditSequence(languageToEdit.sequenceNumber);
      setEditCredits(languageToEdit.numberOfCredits);
      setLanguageEditModalOpen(true);
    }
  };

  const updateLanguage = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/Languages/${editLanguageId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjectName: editSubjectName,
            languageType: editLanguageType,
            sequenceNumber: editSequence,
            numberOfCredits: editCredits,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save the edit");
      }

      setLanguageEditModalOpen(false);
      setShowEditAlert(true);

      setTimeout(() => {
        setShowEditAlert(false);
      }, 3000);
      GetLanguageData();
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  //   ==========END Language Edit Modal==========

  const openLanguageModal = () => {
    setShowLanguageModal(true);
  };

  const closeLanguageModal = () => {
    setShowLanguageModal(false);
  };

  const languageFunc = async () => {
    const obj = {
      subjectName: subjectName,
      languageType: languageType,
      sequenceNumber: +sequence,
      numberOfCredits: +NoOfCredits,
    };

    try {
      await fetch(`http://localhost:3000/Languages`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          //   alert("Your subject is created");
          setshowAddingAlert(true);

          setTimeout(() => {
            setshowAddingAlert(false);
          }, 4000);
          console.log(res);
          GetLanguageData();
          setSubjectName("");
          setLanguageType("");
          setNoOfCredits(null);
          setSequence(null);
        });
    } catch (err) {
      console.log(err);
    }
    closeLanguageModal();
  };

  const GetLanguageData = async () => {
    await fetch(`http://localhost:3000/Languages`)
      .then((res) => res.json())
      .then((res) => setLanguageData(res))
      .catch((err) => console.log(err));
  };

  const deleteFunc = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/Languages/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the subject");
      }

      setshowDeletingAlert(true);

      setTimeout(() => {
        setshowDeletingAlert(false);
      }, 23000);

      GetLanguageData();
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  //   const EditFunc = (id) => {};

  useEffect(() => {
    GetLanguageData();
  }, []);

  return (
    <div className="Create_subject_main_container">
      <div className="Create_subject_first_container">
        <p style={{ color: "blue" }}>SIS</p>
        <p>/</p>
        <p>Subjects</p>
        <p>/</p>
        <p>Subject Creation</p>
      </div>
      <div className="Create_subject_second_container">
        <div>
          <h3>Create Subjects</h3>
        </div>
        <div className="Create_subject_sec_con_child_2">
          <p>Manage Language</p>
          <p>Manage Optional</p>
          <p>Manage Elective Types</p>
          <p>Manage Subject Blocks</p>
          <p>Master Subject / Subject Groups</p>
          <p>Copy Subjects</p>
          <p>Manage Branch Subject</p>
        </div>
      </div>
      <div className="Create_subject_third_container">
        <div>
          <label>Branch Type</label>
          <div>
            <select name="" id="">
              <option value="School">School</option>
            </select>
            <p>(AY:2023-24)</p>
          </div>
        </div>
        <div>
          <label>Class Categories / Programme</label>
          <div>
            <select name="" id="">
              <option value="Pre-Primary">Pre-Primary</option>
            </select>
          </div>
        </div>
        <div>
          <label>Boards</label>
          <div>
            <select name="" id="">
              <option value="State">State</option>
            </select>
          </div>
        </div>
      </div>
      <div className="Create_subject_forth_container">
        <div>
          <div className="Create_sub_forth_con_header">
            <div
              onClick={() => {
                setNursary(true);
                setLkg(false);
                setUkg(false);
              }}
              style={
                nursary
                  ? {
                      borderBottom: "3px solid #005be8",
                      backgroundColor: "white",
                    }
                  : {}
              }
            >
              NURSERY IK-1
            </div>
            <div
              onClick={() => {
                setNursary(false);
                setLkg(true);
                setUkg(false);
              }}
              style={
                lkg
                  ? {
                      borderBottom: "3px solid #005be8",
                      backgroundColor: "white",
                    }
                  : {}
              }
            >
              LKG IK-2
            </div>
            <div
              onClick={() => {
                setNursary(false);
                setLkg(false);
                setUkg(true);
              }}
              style={
                ukg
                  ? {
                      borderBottom: "3px solid #005be8",
                      backgroundColor: "white",
                    }
                  : {}
              }
            >
              UKG IK-3
            </div>
          </div>
          {nursary ? (
            <div className="Create_sub_nursary_conatiner">
              <div className="Create_sub_nursary_Languages_container">
                {/* Alert with automatic dismissal */}
                {showAddingAlert && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                    style={{
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 9999,
                    }}
                  >
                    Your Item is added successfully!
                  </div>
                )}
                {showDeletingAlert && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                    style={{
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 9999,
                    }}
                  >
                    Your Item is removed successfully!
                  </div>
                )}
                {showEditAlert && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                    style={{
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 9999,
                    }}
                  >
                    Your Item is Updated successfully!
                  </div>
                )}
                {/* No need to manually dismiss the alert */}
                <div className="Language_div_flex">
                  <h4>Languages</h4>
                  <BiSolidPlusSquare size={25} onClick={openLanguageModal} />
                </div>
                <div className="Cre_Sub_nursary_language_table_Head">
                  <div>Sequence No.</div>
                  <div>Language Type</div>
                  <div>Subject Name</div>
                  <div>No. of Credits</div>
                  <div>Master Subject/Subject Groups</div>
                  <div>Skill Subject</div>
                  <div>Action</div>
                </div>
                {languageData &&
                  languageData.map((ele) => (
                    <div
                      key={ele.id}
                      className="Cre_Sub_nursary_language_table_Data"
                    >
                      <div>{ele.sequenceNumber}</div>
                      <div>{ele.languageType}</div>
                      <div className="subject_name_language_table">
                        <div>{ele.subjectName}</div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            justifyContent: "center",
                            marginTop: "5px",
                          }}
                        >
                          <button style={{ backgroundColor: "#23c6c7" }}>
                            Academic
                          </button>
                          <button style={{ backgroundColor: "#f0ad4e" }}>
                            Non-CGPA
                          </button>
                        </div>
                      </div>
                      <div>{ele.numberOfCredits}</div>
                      <div></div>
                      <div></div>
                      <div className="langauge_table_action_box">
                        <button onClick={() => EditFunc(ele.id)}>
                          <FiEdit size={16} />
                        </button>
                        |
                        <button onClick={() => deleteFunc(ele.id)}>
                          <MdDeleteForever size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="Create_sub_nursary_General_container">
                <div className="General_div_flex">
                  <h4>General / Group Subjects</h4>
                  <BiSolidPlusSquare size={25} />
                </div>
                <div className="Cre_Sub_nursary_general_table_Head">
                  <div>Sequence No.</div>
                  <div>Subject Name</div>
                  <div>No. of Credits</div>
                  <div>Master Subject/Subject Groups</div>
                  <div>Skill Subject</div>
                  <div>Action</div>
                </div>
                {/* ======= */}
                <div className="Cre_Sub_nursary_general_table_Data">
                  <div>1</div>

                  <div className="general_name_general_table">
                    <div>Arabic</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button style={{ backgroundColor: "#23c6c7" }}>
                        Academic
                      </button>
                      <button style={{ backgroundColor: "#f0ad4e" }}>
                        Non-CGPA
                      </button>
                    </div>
                  </div>
                  <div>0</div>
                  <div></div>
                  <div></div>
                  <div className="general_table_action_box">
                    <button>
                      <FiEdit size={16} />
                    </button>
                    |
                    <button>
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                </div>
                {/* ======= */}
                <div className="Cre_Sub_nursary_general_table_Data">
                  <div>2</div>

                  <div className="general_name_general_table">
                    <div>Hindi</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button style={{ backgroundColor: "#23c6c7" }}>
                        Academic
                      </button>
                      <button style={{ backgroundColor: "#f0ad4e" }}>
                        Non-CGPA
                      </button>
                    </div>
                  </div>
                  <div>0</div>
                  <div></div>
                  <div></div>
                  <div className="general_table_action_box">
                    <button>
                      <FiEdit size={16} />
                    </button>
                    |
                    <button>
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                </div>
                {/* ======= */}
                <div className="Cre_Sub_nursary_general_table_Data">
                  <div>3</div>

                  <div className="general_name_general_table">
                    <div>Math</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button style={{ backgroundColor: "#23c6c7" }}>
                        Academic
                      </button>
                      <button style={{ backgroundColor: "#f0ad4e" }}>
                        Non-CGPA
                      </button>
                    </div>
                  </div>
                  <div>0</div>
                  <div></div>
                  <div></div>
                  <div className="general_table_action_box">
                    <button>
                      <FiEdit size={16} />
                    </button>
                    |
                    <button>
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                </div>
                {/* ======= */}
                <div className="Cre_Sub_nursary_general_table_Data">
                  <div>4</div>

                  <div className="general_name_general_table">
                    <div>Science</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button style={{ backgroundColor: "#23c6c7" }}>
                        Academic
                      </button>
                      <button style={{ backgroundColor: "#f0ad4e" }}>
                        Non-CGPA
                      </button>
                    </div>
                  </div>
                  <div>0</div>
                  <div></div>
                  <div></div>
                  <div className="general_table_action_box">
                    <button>
                      <FiEdit size={16} />
                    </button>
                    |
                    <button>
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                </div>
                {/* ======= */}
                <div className="Cre_Sub_nursary_general_table_Data">
                  <div>5</div>

                  <div className="general_name_general_table">
                    <div>Geography</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button style={{ backgroundColor: "#23c6c7" }}>
                        Academic
                      </button>
                      <button style={{ backgroundColor: "#f0ad4e" }}>
                        Non-CGPA
                      </button>
                    </div>
                  </div>
                  <div>0</div>
                  <div></div>
                  <div></div>
                  <div className="general_table_action_box">
                    <button>
                      <FiEdit size={16} />
                    </button>
                    |
                    <button>
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                </div>
                {/* ======= */}
                <div className="Cre_Sub_nursary_general_table_Data">
                  <div>6</div>

                  <div className="general_name_general_table">
                    <div>Urdu</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button style={{ backgroundColor: "#23c6c7" }}>
                        Academic
                      </button>
                      <button style={{ backgroundColor: "#f0ad4e" }}>
                        Non-CGPA
                      </button>
                    </div>
                  </div>
                  <div>0</div>
                  <div></div>
                  <div></div>
                  <div className="general_table_action_box">
                    <button>
                      <FiEdit size={16} />
                    </button>
                    |
                    <button>
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                </div>
                {/* ======= */}
                <div className="Cre_Sub_nursary_general_table_Data">
                  <div>7</div>

                  <div className="general_name_general_table">
                    <div>Phyclogy</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button style={{ backgroundColor: "#23c6c7" }}>
                        Academic
                      </button>
                      <button style={{ backgroundColor: "#f0ad4e" }}>
                        Non-CGPA
                      </button>
                    </div>
                  </div>
                  <div>0</div>
                  <div></div>
                  <div></div>
                  <div className="general_table_action_box">
                    <button>
                      <FiEdit size={16} />
                    </button>
                    |
                    <button>
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div
                style={{ marginTop: "50px" }}
                className="Create_sub_nursary_Languages_container"
              >
                <div className="Language_div_flex">
                  <h4>Optional / Elective Objects</h4>
                  <BiSolidPlusSquare size={25} />
                </div>
                <div className="Cre_Sub_nursary_language_table_Head">
                  <div>Sequence No.</div>
                  <div>Optional / Elective Type</div>
                  <div>Subject Name</div>
                  <div>No. of Credits</div>
                  <div>Master Subject/Subject Groups</div>
                  <div>Skill Subject</div>
                  <div>Action</div>
                </div>
                {data.length == 0 ? (
                  <div className="no_data_found_subject_create">
                    No data found
                  </div>
                ) : (
                  <div className="Cre_Sub_nursary_language_table_Data">
                    <div>1</div>
                    <div>#Language</div>
                    <div className="subject_name_language_table">
                      <div>Arabic</div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          justifyContent: "center",
                          marginTop: "5px",
                        }}
                      >
                        <button style={{ backgroundColor: "#23c6c7" }}>
                          Academic
                        </button>
                        <button style={{ backgroundColor: "#f0ad4e" }}>
                          Non-CGPA
                        </button>
                      </div>
                    </div>
                    <div>0</div>
                    <div></div>
                    <div></div>
                    <div className="langauge_table_action_box">
                      <button>
                        <FiEdit size={16} />
                      </button>
                      |
                      <button>
                        <MdDeleteForever size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="Create_sub_nursary_General_container">
                <div className="General_div_flex">
                  <h4>Religius Subjects</h4>
                  <BiSolidPlusSquare size={25} />
                </div>
                <div className="Cre_Sub_nursary_general_table_Head">
                  <div>Sequence No.</div>
                  <div>Subject Name</div>
                  <div>No. of Credits</div>
                  <div>Master Subject/Subject Groups</div>
                  <div>Skill Subject</div>
                  <div>Action</div>
                </div>
                {data.length == 0 ? (
                  <div className="no_data_found_subject_create">
                    No data found
                  </div>
                ) : (
                  <div className="Cre_Sub_nursary_general_table_Data">
                    <div>1</div>

                    <div className="general_name_general_table">
                      <div>Arabic</div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          justifyContent: "center",
                          marginTop: "5px",
                        }}
                      >
                        <button style={{ backgroundColor: "#23c6c7" }}>
                          Academic
                        </button>
                        <button style={{ backgroundColor: "#f0ad4e" }}>
                          Non-CGPA
                        </button>
                      </div>
                    </div>
                    <div>0</div>
                    <div></div>
                    <div></div>
                    <div className="general_table_action_box">
                      <button>
                        <FiEdit size={16} />
                      </button>
                      |
                      <button>
                        <MdDeleteForever size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : lkg ? (
            <div className="Create_sub_lkg_conatiner">lkg</div>
          ) : (
            <div className="Create_sub_ukg_conatiner">ukg</div>
          )}
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showLanguageModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showLanguageModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Subject</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeLanguageModal}
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
                  <select
                    className="form-select"
                    id="sequence"
                    onChange={(e) => setSequence(e.target.value)}
                  >
                    <option value="">Select Sequence</option>
                    {numbers.map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="NoOfCredits"
                    onChange={(e) => setNoOfCredits(e.target.value)}
                    placeholder="No. of Credits"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeLanguageModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={languageFunc}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${languageEditModalOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: languageEditModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Language</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  setLanguageEditModalOpen(false);
                }}
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
                    value={editSubjectName || ""}
                    onChange={(e) => setEditSubjectName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="languageType"
                    placeholder="Language Type"
                    value={editLanguageType || ""}
                    onChange={(e) => setEditLanguageType(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    id="sequence"
                    value={editSequence || ""}
                    onChange={(e) => setEditSequence(e.target.value)}
                  >
                    <option value="">Select Sequence</option>
                    {numbers.map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="NoOfCredits"
                    value={editCredits || ""}
                    onChange={(e) => setEditCredits(e.target.value)}
                    placeholder="No. of Credits"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setLanguageEditModalOpen(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateLanguage} // You need to create this function
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}