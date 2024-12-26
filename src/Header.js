// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router";
// import './App.css';

// export function Header() {
//   return (
//     <nav className="nav">
//       <NavLink className="NavLink" to="/home">
//        {/* <img  className="home_logo" src="accueil.png"/> */}
//        Accueil
//       </NavLink>
//       <NavLink className="NavLink" to="/femmes" >
//         Femmes
//       </NavLink>
//       <NavLink className="NavLink" to="/hommes">Homme</NavLink>
//       <NavLink className="NavLink" to="/conditions" >
//         Nos conditions
//       </NavLink>
//       {/* <NavLink  className="NavLink" to="/account">test</NavLink> */}
//     </nav>
//   );
// }

import React from "react";
import { NavLink } from "react-router-dom"; // Ensure it's from "react-router-dom"
import "./App.css";

export function Header() {
  return (
    <nav className="nav">
      <NavLink
        className={({ isActive }) => (isActive ? "NavLink active" : "NavLink")}
        to="/home"
      >
        Accueil
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "NavLink active" : "NavLink")}
        to="/femmes"
      >
        Femmes
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "NavLink active" : "NavLink")}
        to="/hommes"
      >
        Homme
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "NavLink active" : "NavLink")}
        to="/conditions"
      >
        Nos conditions
      </NavLink>
    </nav>
  );
}
