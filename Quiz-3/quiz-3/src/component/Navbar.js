import React, { useState, useContext } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { LoginContext } from "./Route/LoginContext";

const Navbar = () => {
  const [Login, setLogin] = useContext(LoginContext);

  const handleLogout = (event) => {
    setLogin({ ...Login, token: "inValid" });
  };

  return (
    <header>
      <img id="logo" src={Logo} width="200px" alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {Login.token === "valid" ? (
            <>
              <li>
                <Link to="/daftarFilm">Book List Editor</Link>
              </li>
              <li style={{ cursor: "pointer" }}>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
