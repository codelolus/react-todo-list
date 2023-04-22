import "./App.css";
import { motion } from "framer-motion";
import { textVariant } from "./animations";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import React, { useState } from "react";

const tokenStorage = localStorage.getItem("token");

export default function Login() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnText, setBtnText] = useState("Zaloguj się");

  if (tokenStorage) {
    window.location.href = "/logged";
    return <div></div>;
  }

  const handleLoginChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLoginValue(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordValue(event.target.value);
  };

  const token = Math.floor(Math.random() * 1000000) as number;

  const handleButtonClick = async (): Promise<void> => {
    setBtnLoading(true);
    setBtnText("Logowanie...");

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginValue,
        password: passwordValue,
        token: token,
      }),
    });

    const data = await response.json();

    if (data && data.status === "success") {
      localStorage.setItem("token", token.toString());
      window.location.href = "/logged";
    } else {
      setBtnLoading(false);
      setBtnText("Zaloguj się");
      alert("Niepoprawny email lub hasło");
    }
  };

  return (
    <>
      <motion.div
        variants={textVariant(0)}
        animate={{ y: [100, 0, 0] }}
        className="login-box"
      >
        <div className="content">
          <h1>Zaloguj się</h1>
          <div className="inputs">
            <HiOutlineMail />
            <input
              type="text"
              id="login"
              value={loginValue}
              onChange={handleLoginChange}
              placeholder="Podaj e-mail"
            />
            <FaLock />
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={handlePasswordChange}
              placeholder="Podaj hasło"
            />
            <button
              className="loginButton"
              id="btn"
              onClick={handleButtonClick}
              disabled={btnLoading}
            >
              <BsFillSendFill /> {btnText}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
