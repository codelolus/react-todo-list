import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Navbar from "./navbar";
import Login from "./login";
import Logged from "./logged";
import LoggedNavbar from "./loggedBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logged" element={<Logged />} />
        <Route path="/loggedBae" element={<LoggedNavbar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
