import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "./Nav.css"
import { DaftarMahasiswaContext } from "./DaftarMahasiswaContext";


const Nav = () =>{
  const [theme] = useContext(DaftarMahasiswaContext)

  const navStyle = theme === "dark" ? {background: "navy"} : {};
  const listStyle = theme === "dark" ? {color: "white"} : {};

  return(
    <nav style={navStyle}>
      <ul>
        <li>
          <Link style={listStyle} to="/">Tugas 9</Link>
        </li>
        <li>
          <Link style={listStyle} to="/tugas10">Tugas 10</Link>
        </li>

        <li>
          <Link style={listStyle} to="/tugas11">Tugas 11</Link>
        </li>
        <li>
          <Link style={listStyle} to="/tugas12">Tugas 12</Link>
        </li>
        <li>
          <Link style={listStyle} to="/tugas13">Tugas 13</Link>
        </li>
        <li>
          <Link style={listStyle} to="/tugas14">Tugas 14</Link>
        </li>
        <li>
          <Link style={listStyle} to="/tugas15">Tugas 15</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav