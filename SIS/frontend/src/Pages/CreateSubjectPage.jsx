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
  {
    /*==================  Alert States================== */
  }
  const [languageData, setLanguageData] = useState([]);
  const [showAddingAlert, setshowAddingAlert] = useState(false);
  const [showDeletingAlert, setshowDeletingAlert] = useState(false);
  const [showEditAlert, setShowEditAlert] = useState(false);
  {
    /*==================  Alert States END================== */
  }

  {
    /*================== Language Modal States and functions================== */
  }
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const [sequence, setSequence] = useState(0);
  const [languageType, setLanguageType] = useState("");
  const [NoOfCredits, setNoOfCredits] = useState(null);
  const numbers = Array.from({ length: 500 }, (_, i) => i + 1);

  const openLanguageModal = () => {
    setShowLanguageModal(true);
  };

  const closeLanguageModal = () => {
    setShowLanguageModal(false);
  };

  const GetLanguageData = async () => {
    await fetch(`http://localhost:3000/Languages`)
      .then((res) => res.json())
      .then((res) => setLanguageData(res))
      .catch((err) => console.log(err));
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

  {
    /*==================/////// END Language Modal States /////////================== */
  }

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

  //   ==========//////// END Language Edit Modal /////////==========

  //   ========== General Satets & functions==========
  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [GeneralData, setGeneraData] = useState([false]);

  const openGeneralModal = () => {
    setShowGeneralModal(true);
  };
  const closeGeneralModal = () => {
    setShowGeneralModal(false);
  };

  const GeneralAddFunction = async () => {
    const obj = {
      subjectName: subjectName,
      sequenceNumber: +sequence,
      numberOfCredits: NoOfCredits,
    };
    try {
      await fetch(`http://localhost:3000/general`, {
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
          GetGeneralData();
          setTimeout(() => {
            setshowAddingAlert(false);
          }, 4000);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
    closeGeneralModal();
  };

  const GetGeneralData = async () => {
    await fetch(`http://localhost:3000/general`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setGeneraData(res);
      })
      .catch((err) => console.log(err));
  };

  const GeneralDeleteFunc = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/general/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the subject");
      }

      setshowDeletingAlert(true);

      setTimeout(() => {
        setshowDeletingAlert(false);
      }, 23000);

      GetGeneralData();
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  // ==========////////// END General States /////////==========

  // ==========General Edit Modal==========
  const [generalEditModalOpen, setGeneralEditModalOpen] = useState(false);

  const [editGeneralId, setEditGeneralId] = useState(null);

  const EditFuncGeneral = (id) => {
    const GeneralToEdit = GeneralData.find((language) => language.id === id);

    if (GeneralToEdit) {
      setEditGeneralId(id);
      setEditSubjectName(GeneralToEdit.subjectName);
      setEditSequence(GeneralToEdit.sequenceNumber);
      setEditCredits(GeneralToEdit.numberOfCredits);
      setGeneralEditModalOpen(true);
    }
  };

  const updateGeneral = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/general/${editGeneralId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjectName: editSubjectName,
            sequenceNumber: editSequence,
            numberOfCredits: editCredits,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save the edit");
      }

      setGeneralEditModalOpen(false);
      setShowEditAlert(true);

      setTimeout(() => {
        setShowEditAlert(false);
      }, 3000);
      GetGeneralData();
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  // ==========END General Edit Modal==========

  // ========== Optional Satets & functions==========
  const [showOptionalModal, setShowOptionalModal] = useState(false);
  const [OptionalData, setOptionalData] = useState([]);
  const [Optional, setOptional] = useState("");

  const openOptionalModal = () => {
    setShowOptionalModal(true);
  };
  const closeOptionalModal = () => {
    setShowOptionalModal(false);
  };

  const OptionalAddFunction = async () => {
    const obj = {
      subjectName: subjectName,
      sequenceNumber: +sequence,
      optional: Optional,
      numberOfCredits: NoOfCredits,
    };
    try {
      await fetch(`http://localhost:3000/Optional`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          // alert("Your subject is created");
          setshowAddingAlert(true);
          GetOptionalData();
          setTimeout(() => {
            setshowAddingAlert(false);
          }, 4000);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
    closeOptionalModal();
  };

  const GetOptionalData = async () => {
    await fetch(`http://localhost:3000/Optional`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setOptionalData(res);
      })
      .catch((err) => console.log(err));
  };

  const OptionalDeleteFunc = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/Optional/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the subject");
      }

      setshowDeletingAlert(true);

      setTimeout(() => {
        setshowDeletingAlert(false);
      }, 23000);

      GetOptionalData();
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  //   ==========END Optional States==========

  // ==========Optional Edit Modal==========
  const [OptionalEditModalOpen, setOptionalEditModalOpen] = useState(false);
  const [editOptional, setEditOptional] = useState("");
  const [editOptionalId, setEditOptionalId] = useState(null);

  const EditFuncOptional = (id) => {
    const OptionalToEdit = OptionalData.find((language) => language.id === id);

    if (OptionalToEdit) {
      setEditOptionalId(id);
      setEditSubjectName(OptionalToEdit.subjectName);
      setEditSequence(OptionalToEdit.sequenceNumber);
      setEditCredits(OptionalToEdit.numberOfCredits);
      setEditOptional(OptionalToEdit.setOptional);

      setOptionalEditModalOpen(true);
    }
  };

  const updateOptional = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/Optional/${editOptionalId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjectName: editSubjectName,
            sequenceNumber: editSequence,
            numberOfCredits: editCredits,
            optional: editOptional,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save the edit");
      }

      setOptionalEditModalOpen(false);
      setShowEditAlert(true);

      setTimeout(() => {
        setShowEditAlert(false);
      }, 3000);
      GetOptionalData();
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  // ==========END Optional Edit Modal==========

  //   ========== General Satets & functions==========
  const [showReligiusModal, setShowReligiusModal] = useState(false);
  const [ReligiusData, setReligiusData] = useState([false]);

  const openReligiusModal = () => {
    setShowReligiusModal(true);
  };
  const closeReligiusModal = () => {
    setShowReligiusModal(false);
  };

  const ReligiusAddFunction = async () => {
    const obj = {
      subjectName: subjectName,
      sequenceNumber: +sequence,
      numberOfCredits: +NoOfCredits,
    };
    try {
      await fetch(`http://localhost:3000/Religius`, {
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
          GetReligiusData();
          setTimeout(() => {
            setshowAddingAlert(false);
          }, 4000);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
    closeReligiusModal();
  };

  const GetReligiusData = async () => {
    await fetch(`http://localhost:3000/Religius`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setReligiusData(res);
      })
      .catch((err) => console.log(err));
  };

  const ReligiusDeleteFunc = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/Religius/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the subject");
      }

      setshowDeletingAlert(true);

      setTimeout(() => {
        setshowDeletingAlert(false);
      }, 23000);

      GetReligiusData();
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  // ==========////////// END General States /////////==========

  // ==========General Edit Modal==========
  const [ReligiusEditModalOpen, setReligiusEditModalOpen] = useState(false);
  console.log(ReligiusEditModalOpen);

  const [editReligiusId, setEditReligiusId] = useState(null);

  const EditFuncReligius = (id) => {
    const ReligiusToEdit = ReligiusData.find((language) => language.id === id);

    if (ReligiusToEdit) {
      setEditReligiusId(id);
      setEditSubjectName(ReligiusToEdit.subjectName);
      setEditSequence(ReligiusToEdit.sequenceNumber);
      setEditCredits(ReligiusToEdit.numberOfCredits);
      setReligiusEditModalOpen(true);
    }
  };

  const updateReligius = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/Religius/${editReligiusId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjectName: editSubjectName,
            sequenceNumber: editSequence,
            numberOfCredits: editCredits,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save the edit");
      }

      setReligiusEditModalOpen(false);
      setShowEditAlert(true);

      setTimeout(() => {
        setShowEditAlert(false);
      }, 3000);
      GetReligiusData();
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  // ==========END General Edit Modal==========
  useEffect(() => {
    GetLanguageData();
    GetGeneralData();
    GetOptionalData();
    GetReligiusData();
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
                {/*================== Alert with automatic dismissal================== */}
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
                {/* ==================No need to manually dismiss the alert================== */}
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
                  <BiSolidPlusSquare size={25} onClick={openGeneralModal} />
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
                {GeneralData.map((ele) => (
                  <div
                    key={ele.id}
                    className="Cre_Sub_nursary_general_table_Data"
                  >
                    <div>{ele.sequenceNumber}</div>

                    <div className="general_name_general_table">
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
                    <div className="general_table_action_box">
                      <button>
                        <FiEdit
                          size={16}
                          onClick={() => EditFuncGeneral(ele.id)}
                        />
                      </button>
                      |
                      <button>
                        <MdDeleteForever
                          size={20}
                          onClick={() => GeneralDeleteFunc(ele.id)}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{ marginTop: "50px" }}
                className="Create_sub_nursary_Languages_container"
              >
                <div className="Language_div_flex">
                  <h4>Optional / Elective Objects</h4>
                  <BiSolidPlusSquare size={25} onClick={openOptionalModal} />
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
                {OptionalData.length == 0 ? (
                  <div className="no_data_found_subject_create">
                    No data found
                  </div>
                ) : (
                  OptionalData.map((ele) => (
                    <div
                      className="Cre_Sub_nursary_language_table_Data"
                      key={ele.id}
                    >
                      <div>{ele.sequenceNumber}</div>
                      <div>{ele.optional}</div>
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
                        <button>
                          <FiEdit
                            size={16}
                            onClick={() => EditFuncOptional(ele.id)}
                          />
                        </button>
                        |
                        <button>
                          <MdDeleteForever
                            size={20}
                            onClick={() => OptionalDeleteFunc(ele.id)}
                          />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="Create_sub_nursary_General_container">
                <div className="General_div_flex">
                  <h4>Religius Subjects</h4>
                  <BiSolidPlusSquare size={25} onClick={openReligiusModal} />
                </div>
                <div className="Cre_Sub_nursary_general_table_Head">
                  <div>Sequence No.</div>
                  <div>Subject Name</div>
                  <div>No. of Credits</div>
                  <div>Master Subject/Subject Groups</div>
                  <div>Skill Subject</div>
                  <div>Action</div>
                </div>
                {ReligiusData.length == 0 ? (
                  <div className="no_data_found_subject_create">
                    No data found
                  </div>
                ) : (
                  ReligiusData.map((ele) => (
                    <div
                      key={ele.id}
                      className="Cre_Sub_nursary_general_table_Data"
                    >
                      <div>{ele.sequenceNumber}</div>

                      <div className="general_name_general_table">
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
                      <div className="general_table_action_box">
                        <button>
                          <FiEdit
                            size={16}
                            onClick={() => EditFuncReligius(ele.id)}
                          />
                        </button>
                        |
                        <button>
                          <MdDeleteForever
                            size={20}
                            onClick={() => ReligiusDeleteFunc(ele.id)}
                          />
                        </button>
                      </div>
                    </div>
                  ))
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

      {/*================== Language Modal for Adding================== */}
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
      {/*==================END Language Modal for Adding================== */}

      {/*==================Language Edit Modal ==================*/}
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
      {/*==================END Language Edit Modal================== */}

      {/* ============General Modal============ */}
      <div
        className={`modal fade ${showGeneralModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showGeneralModal ? "block" : "none" }}
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
                onClick={closeGeneralModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={GeneralAddFunction}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ============END General Modal============ */}

      {/*==================general Edit Modal ==================*/}
      <div
        className={`modal fade ${generalEditModalOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: generalEditModalOpen ? "block" : "none" }}
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
                  setGeneralEditModalOpen(false);
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
                  setGeneralEditModalOpen(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateGeneral} // You need to create this function
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*==================END general Edit Modal================== */}

      {/*================== Optional Modal for Adding================== */}
      <div
        className={`modal fade ${showOptionalModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showOptionalModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Subject</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeOptionalModal}
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
                    id="optional"
                    onChange={(e) => setOptional(e.target.value)}
                  >
                    <option value="">Select Optional / Elective Objects</option>

                    <option value="Elective-1">Elective-1</option>
                    <option value="Elective-2">Elective-2</option>
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
                onClick={closeOptionalModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={OptionalAddFunction}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*==================END Optional Modal for Adding================== */}

      {/*==================Language Edit Modal ==================*/}
      <div
        className={`modal fade ${OptionalEditModalOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: OptionalEditModalOpen ? "block" : "none" }}
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
                  setOptionalEditModalOpen(false);
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
                  <select
                    className="form-select"
                    id="optional"
                    value={editOptional || ""}
                    onChange={(e) => setEditOptional(e.target.value)}
                  >
                    <option value="">Select Optional / Elective Objects</option>

                    <option value="Elective-1">Elective-1</option>
                    <option value="Elective-2">Elective-2</option>
                  </select>
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
                  setOptionalEditModalOpen(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateOptional} // You need to create this function
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*==================END Optional Edit Modal================== */}

      {/* ============Religius Modal============ */}
      <div
        className={`modal fade ${showReligiusModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showReligiusModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Subject</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeReligiusModal}
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
                onClick={closeReligiusModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={ReligiusAddFunction}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ============END Religius Modal============ */}

      {/*==================Religius Edit Modal ==================*/}
      <div
        className={`modal fade ${ReligiusEditModalOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: ReligiusEditModalOpen ? "block" : "none" }}
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
                  setReligiusEditModalOpen(false);
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
                  setReligiusEditModalOpen(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateReligius} // You need to create this function
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*==================END Religius Edit Modal================== */}
    </div>
  );
}
