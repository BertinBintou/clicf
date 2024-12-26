import './App.css';
import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './Header';
import BouleContainer from './BouleContainer';
import Boulecontainerman from './Boulecontainerman';
import Home from './Home';
import Login from './Login';

function Error() {
  // Get the current location
  const location = useLocation();

  return (
    <div className="App">
     Error page not found
    </div>
  );
}

export default Error;
