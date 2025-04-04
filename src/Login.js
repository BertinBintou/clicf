// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from './App';
// import './App.css';

// function Login() {
//   const { isChecked, setIsChecked } = useContext(AuthContext);

//   return (
//     <div className="App logincontainer">
//   
//       <div className='logo'>🍑</div>
//       <div className="logintitre">
//         je confirme être majeur (au moins 18 ans) et avoir lu et accepté les conditions d'utilisations.
//       </div>
//       <input
//         type="checkbox"
//         checked={isChecked}
//         onChange={(e) => setIsChecked(e.target.checked)}
//       />

//       {/* Conditionally enable the button */}
//       <div className="logincontainerbutton">
//         <button  className="loginbutton" disabled={!isChecked}>
//           <Link to="/conditions" className='linkbutton'>
//             conditions d'utilisations
//           </Link>
//         </button>
//       </div>
//       <button className="loginbutton" disabled={!isChecked}>
//         <Link to="/home" className={`linkbutton add-button ${!isChecked ? 'disabled-link' : ''}`}>
//           visiter le site
//         </Link>
//       </button>

//       <style>
//         {`
//           .disabled-link {
//             pointer-events: none;
//             color: gray; /* Optional: Add styling for disabled link */
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Login;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from './App';
// import ReactGA from "react-ga4"; // Import Google Analytics
// import './App.css';

// function Login() {
//   const { isChecked, setIsChecked } = useContext(AuthContext);

//   // Track when the checkbox state changes
//   const handleCheckboxChange = (e) => {
//     const checked = e.target.checked;
//     setIsChecked(checked);

//     // Log the checkbox event
//     ReactGA.event({
//       category: "User",
//       action: checked ? "Accepted Conditions" : "Unchecked Conditions",
//       label: "Terms and Conditions Checkbox",
//     });
//   };

//   // Track when the user clicks the "conditions d'utilisations" button
//   const handleConditionsClick = () => {
//     ReactGA.event({
//       category: "Navigation",
//       action: "Clicked Conditions Button",
//       label: "Conditions of Use",
//     });
//   };

//   // Track when the user clicks the "visiter le site" button
//   const handleVisitSiteClick = () => {
//     ReactGA.event({
//       category: "Navigation",
//       action: "Clicked Visit Site",
//       label: "Visit Home Page",
//     });
//   };

//   return (
//     <div className="App logincontainer">
//       {/* <h1>Bienvenu sur tap to fap</h1> */}
//       {/* <div className='logo'>🍑</div> */}
//        <div className='logo'>
//           {/* <img src="Peach (1).svg" alt="logo" /> */}
//           <img src="Logo_TtF.svg" alt="logo" className='logo_login' />
//         </div> 

//       <div className="logintitre">
//         Je confirme être majeur (au moins 18 ans) et avoir lu et accepté les conditions d'utilisations🔞.
//       </div>
//       <input
//         type="checkbox"
//         checked={isChecked}
//         onChange={handleCheckboxChange} // Use the event handler
//       />

//       {/* Conditionally enable the button */}
//       <div className="logincontainerbutton">
//         {/* <button className="loginbutton" disabled={!isChecked} onClick={handleConditionsClick}>
//           <Link to="/conditions" className='linkbutton'>
//             conditions d'utilisations
//           </Link>
//         </button> */}
//       </div>
//       <button className="loginbutton" disabled={!isChecked} onClick={handleVisitSiteClick}>
//         <Link to="/home" className={`linkbutton  loginbutton add-button ${!isChecked ? 'disabled-link' : ''}`}>
//           visiter le site
//         </Link>
//       </button>

//       <style>
//         {`
//           .disabled-link {
//             pointer-events: none;
//             color: gray; /* Optional: Add styling for disabled link */
//           }
//         `}
//       </style>
//           <div>
//           <Link to="/conditions" className='linkbutton'>
//             conditions d'utilisations
//           </Link>
//           </div>
          
      
//     </div>
//   );
// }

// export default Login;



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './App';
import ReactGA from "react-ga4"; // Import Google Analytics
import './App.css';

function Login() {
  const { isChecked, setIsChecked } = useContext(AuthContext);

  // Track when the checkbox state changes
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    // Log the checkbox event
    ReactGA.event({
      category: "User",
      action: checked ? "Accepted Conditions" : "Unchecked Conditions",
      label: "Terms and Conditions Checkbox",
    });
  };

  // Track when the user clicks the "conditions d'utilisations" button
  const handleConditionsClick = () => {
    ReactGA.event({
      category: "Navigation",
      action: "Clicked Conditions Button",
      label: "Conditions of Use",
    });
  };

  // Track when the user clicks the "visiter le site" button
  const handleVisitSiteClick = () => {
    ReactGA.event({
      category: "Navigation",
      action: "Clicked Visit Site",
      label: "Visit Home Page",
    });
  };

  return (
    <div className="App logincontainer">
      <div className="login-wrapper">
        <div className='logo'>
          <img src="Logo_TtF.svg" alt="logo" className='logo_login' />
        </div> 
  
        <div className="logintitre">
        I confirm that I am of legal age and have read and accepted the terms of use 🔞.
        </div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
  
        <div className="logincontainerbutton">
          <button className="loginbutton" disabled={!isChecked} onClick={handleVisitSiteClick}>
            <Link to="/home" className={`linkbutton_login loginbutton add-button ${!isChecked ? 'disabled-link' : ''}` }>
              Enter
            </Link>
          </button>
        </div>
  
        {/* Move this to bottom */}
        <div className="bottom-link">
          <Link to="/conditions" className='linkbutton_logo'>
            Terms of us
          </Link>
        </div>
      </div>
    </div>
  );
  
}

export default Login;
