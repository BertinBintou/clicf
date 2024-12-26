import './App.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import BouleContainer from './BouleContainer';
import Boulecontainerman from './Boulecontainerman';


function Home() {
  return (
    <div className="App">
      <div className="homecontainer">
        <p>Je veux voir des : </p>
        <button className="containerbutton" >
          <Link  className="containerlink" to="/femmes" >
            femmes 🍑
          </Link>
        </button>
        <button  className="containerbutton">
          <Link className="containerlink" to="/hommes" >
            hommes 🍆
          </Link>
        </button>
      </div>
       
        
 
    </div>
  );
}

export default Home;
