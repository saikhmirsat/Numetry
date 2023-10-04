
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { BiSolidHide } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";

export default function Register() {
  const [hide, setHide] = useState(false);
  

  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState(null);

  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const Register = async () => {
    const obj = {
      firstname,
      lastname,
      email,
      password,
      mobile,
      gender,
    };
    console.log(obj);

    try {
      setLoading(true);
      await fetch(`http://localhost:8080/users/register`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status === true) {
            alert(res.message);
            setLoading(false);
            Navigate("/login");
          } else {
            alert(res.message);
          }
        })
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
      alert(err);
      setLoading(false);
    }
  };

  return (
    <div className="register_main_con">
      <div className="Register_con">
        <h1
          style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "15px" }}
        >
          Register
        </h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="register_password_div">
          <input
            type={!hide ? "Password" : "text"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={() => setHide(!hide)}>
            {!hide ? <BsFillEyeFill /> : <BiSolidHide />}
          </div>
        </div>
        <div>
          <select name="" id="" onChange={(e) => setGender(e.target.value)}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="number"
            placeholder="Mobile num"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <button onClick={Register}>
          {loading ? "Loading..." : "Register"}
        </button>
      </div>
    </div>
  );
}
