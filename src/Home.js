// import './App.css';
// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'; // Importing Link for navigation
// import { Routes, Route } from 'react-router-dom';
// import { Header } from './Header';
// import BouleContainer from './BouleContainer';
// import Boulecontainerman from './Boulecontainerman';


// function Home() {
//   const [showDiv, setShowDiv] = useState(false);
//   // const [showDivTime, setShowDivTime] = useState(true);
//   const [showLoadingMessage, setShowLoadingMessage] = useState(false);


//   const handleButtonClick = () => {
//     setShowDiv(!showDiv);
//     if (!showDiv) {
//       setShowLoadingMessage(true);
//       setTimeout(() => {
//         setShowLoadingMessage(false);
//       }, 5000); // Hide the message after 5 seconds
//     }
//   };

//   return (
//     <div className="App">
//       <div className="homecontainer">
//         <p>Je veux voir des : </p>
//         <button className="containerbutton" >
//           <Link  className="containerlink" to="/femmes" >
//             femmes 🍑
//           </Link>
//         </button>
//         <button  className="containerbutton">
//           <Link className="containerlink" to="/hommes" >
//             hommes 🍆
//           </Link>
//         </button>
//       </div>
       
//        <div>
//        <button onClick={handleButtonClick}  className="containerbutton candidaturbutton " style={{backgroundColor:"#770ec9", color:"white"}} >
//         {showDiv ? "Fermer" : "S'inscrire"}
//       </button>
//       {showDiv && 
//       <div >
         
//         {/* <div>peux mettre un peu de temps à charger...</div> */}
//         {showLoadingMessage && <div>peux mettre un peu de temps à charger...</div>}
//         <iframe class="airtable-embed" src="https://airtable.com/embed/appC6RFWJTUmYg7FU/pagOvkh4hdueEp6FH/form" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe></div>}
//         <div>

//         <button className="containerbutton candidaturbutton" >
//           <Link  className="containerlink" to="/usersprofilelink" >
//            Voir mon profil
//           </Link>
//         </button>
      
//     </div>

        
//        </div>
       
       
 
//     </div>
//   );
// }

// export default Home;

// import './App.css';
// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'; // Importing Link for navigation
// import { Routes, Route } from 'react-router-dom';
// import { Header } from './Header';
// import BouleContainer from './BouleContainer';
// import Boulecontainerman from './Boulecontainerman';


// function Home() {
//   const [showDiv, setShowDiv] = useState(false);
//   // const [showDivTime, setShowDivTime] = useState(true);
//   const [showLoadingMessage, setShowLoadingMessage] = useState(false);


//   const handleButtonClick = () => {
//     setShowDiv(!showDiv);
//     if (!showDiv) {
//       setShowLoadingMessage(true);
//       setTimeout(() => {
//         setShowLoadingMessage(false);
//       }, 5000); // Hide the message after 5 seconds
//     }
//   };

//   return (
//     <div className="App">
  
//       <div className="homecontainer">
//        {/* <div style={{border:"1px solid red", width:"100%"}}> */}
       
//         <button className="containerbutton" >
//           <Link  className="containerlink" to="/femmes" >
//             show woman 👩
//           </Link>
//         </button>
//         <button  className="containerbutton">
//           <Link className="containerlink" to="/hommes" >
//             show men 👨
//           </Link>
//         </button>
//         {/* </div> */}
//       </div>
      
//        <div>
//        <button onClick={handleButtonClick}  className="candidaturbutton" style={{height:"48px"}} >
//         {showDiv ? "Fermer" : "S'inscrire"}
//       </button>
//       {showDiv && 
//       <div >
         
//         {/* <div>peux mettre un peu de temps à charger...</div> */}
//         {showLoadingMessage && <div className='loadingFormHome'>loading...</div>}
//         <iframe class="airtable-embed" src="https://airtable.com/embed/appC6RFWJTUmYg7FU/pagOvkh4hdueEp6FH/form" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe></div>}
//         <div>

//         <button className=" candidaturbuttonprofil" >
//           <Link  className="containerlink linkprofiltext" to="/usersprofilelink" >
//           My profile
//           </Link>
//         </button>
      
//     </div>

        
//        </div>
       
       
 
//     </div>
//   );
// }

// export default Home;


import './App.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import BouleContainer from './BouleContainer';
import Boulecontainerman from './Boulecontainerman';


function Home() {
  const [showDiv, setShowDiv] = useState(false);
  // const [showDivTime, setShowDivTime] = useState(true);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);


  const handleButtonClick = () => {
    setShowDiv(!showDiv);
    if (!showDiv) {
      setShowLoadingMessage(true);
      setTimeout(() => {
        setShowLoadingMessage(false);
      }, 5000); // Hide the message after 5 seconds
    }
  };

  return (
    <div className="App">
     
      <div className="homecontainer">
       {/* <div style={{border:"1px solid red", width:"100%"}}> */}
       
        {/* <button className="containerbutton" style={{width:"90%",height:"150px", maxWidth:"1000px"}}> */}
          <Link  className="containerlink" to="/femmes" >
  
            {/* <img src="Div.png" alt="femme" className='imgButtonHomme' style={{width:"100%",height:"150px", maxWidth:"1000px"}} /> */}
            <img src="Div.png" alt="femme" className='imgButtonHomme'  />
          </Link>
        {/* </button> */}
        {/* <button  className="containerbutton" style={{width:"90%",height:"150px", maxWidth:"1000px"}}> */}
          <Link className="containerlink" to="/hommes" >
          <img src="Div-1.png" alt="femme" className='imgButtonHomme'  />
          </Link>
        {/* </button> */}
        {/* </div> */}
      </div>
      
       <div>
       <button onClick={handleButtonClick}  className="candidaturbutton" style={{height:"48px"}} >
        {showDiv ? "Fermer" : "S'inscrire"}
      </button>
      {showDiv && 
      <div >
         
        {/* <div>peux mettre un peu de temps à charger...</div> */}
        {showLoadingMessage && <div className='loadingFormHome'>loading...</div>}
        <iframe class="airtable-embed" src="https://airtable.com/embed/appC6RFWJTUmYg7FU/pagOvkh4hdueEp6FH/form" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe></div>}
        <div>

        <button className=" candidaturbuttonprofil" >
          <Link  className="containerlink linkprofiltext" to="/usersprofilelink" >
          My profile
          </Link>
        </button>
      
    </div>

        
       </div>
       
       
 
    </div>
  );
}

export default Home;

