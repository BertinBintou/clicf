// import React, { useState, createContext, useContext } from "react";
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import { Header } from './Header';
// import BouleContainer from './BouleContainer';
// import Boulecontainerman from './Boulecontainerman';
// import Home from './Home';
// import Login from './Login';
// import Error from './Error';
// import Conditionutilisation from './Conditionutilisation';


// // Create a context for checkbox state
// export const AuthContext = createContext();


// // Initialize Google Analytics with your Measurement ID
// const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your GA4 Measurement ID
// ReactGA.initialize(GA_MEASUREMENT_ID);

// function App() {
//   const [isChecked, setIsChecked] = useState(false);
//   const location = useLocation();

//   return (
//     <AuthContext.Provider value={{ isChecked, setIsChecked }}>
//       <div className="App">
//         {/* Conditionally render the Header based on the current route */}
//         {location.pathname !== '/' && location.pathname !== '/conditions' && <Header />}

//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/conditions" element={<Conditionutilisation />} />
//           {/* Use ProtectedRoute for restricted pages */}
//           <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//           <Route path="/femmes" element={<ProtectedRoute><BouleContainer /></ProtectedRoute>} />
//           <Route path="/hommes" element={<ProtectedRoute><Boulecontainerman /></ProtectedRoute>} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//     </AuthContext.Provider>
//   );
// }

// // ProtectedRoute Component
// function ProtectedRoute({ children }) {
//   const { isChecked } = useContext(AuthContext);

//   // Redirect to the login page if the checkbox is not checked
//   if (!isChecked) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// }

// export default App;

import React, { useState, createContext, useContext, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ReactGA from "react-ga4"; // Import React GA4
import { Header } from './Header';
import BouleContainer from './BouleContainer';
import Boulecontainerman from './Boulecontainerman';
import Home from './Home';
import Login from './Login';
import Error from './Error';
import Conditionutilisation from './Conditionutilisation';
import Secret from "./Secret";

// Create a context for checkbox state
export const AuthContext = createContext();

// Initialize Google Analytics with your Measurement ID
const GA_MEASUREMENT_ID = "xxxxxxx"; // Replace with your GA4 Measurement ID
ReactGA.initialize(GA_MEASUREMENT_ID);

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();

  // Track page views when the route changes
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <AuthContext.Provider value={{ isChecked, setIsChecked }}>
      <div className="App">
        {/* Conditionally render the Header based on the current route */}
        {location.pathname !== '/' && location.pathname !== '/conditions' && <Header />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/conditions" element={<Conditionutilisation />} />
          {/* Use ProtectedRoute for restricted pages */}
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/femmes" element={<ProtectedRoute><BouleContainer /></ProtectedRoute>} />
          <Route path="/hommes" element={<ProtectedRoute><Boulecontainerman /></ProtectedRoute>} />
          {/* <Route path="/a" element={<Secret/>} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

// ProtectedRoute Component
function ProtectedRoute({ children }) {
  const { isChecked } = useContext(AuthContext);

  // Redirect to the login page if the checkbox is not checked
  if (!isChecked) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default App;
