import React, { useState, useContext } from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import DaftarBuku from "../DaftarBuku/DaftarBuku";
import FLogin from "../Login";
import About from "../About";
import { LoginContext } from "./LoginContext";


export default function App() {
  const [Login] = useContext(LoginContext);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {Login.token === "valid" && <DaftarBuku />}
          <Route exact path="/login">
            <FLogin />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
