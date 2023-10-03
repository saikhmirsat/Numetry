import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { BiSolidHide } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";

import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [hide, setHide] = useState(false);

  const Navigate = useNavigate();

  const Login = async () => {
    const obj = {
      email,
      password,
    };

    try {
      setLoading(true);
      await fetch(`http://localhost:8080/users/login`, {
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
            setLoading(false);
            localStorage.setItem("UserData", JSON.stringify(res.user));
            alert(res.message);
            Navigate("/blogs");
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
    <div className="login_main_con">
      <div className="loginContainer">
        <h1
          style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "15px" }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="login_password_div">
          <input
            type={!hide ? "Password" : "text"}
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <div onClick={() => setHide(!hide)}>
            {!hide ? <BsFillEyeFill /> : <BiSolidHide />}
          </div>
        </div>
        <button onClick={Login}>{loading ? "Loading..." : "Login"}</button>
      </div>
    </div>
  );
}
