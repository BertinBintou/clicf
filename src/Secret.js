// import './App.css';
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import { Header } from './Header';
// import BouleContainer from './BouleContainer';
// import Boulecontainerman from './Boulecontainerman';

// function Secret() {
//   const [boulesData, setBoulesData] = useState([]);
//   const [error, setError] = useState(null);
//   const [password, setPassword] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     console.log('Fetching data...');
    
//     fetch('/boulesia/boules.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Fetched data:', data);
//         setBoulesData(data);
//       })
//       .catch(error => {
//         console.error('Error loading boules data:', error);
//         setError(error.message);
//       });
//   }, []);

//   const handlePasswordChange = (e) => {
//     const inputPassword = e.target.value;
//     setPassword(inputPassword);
    
//     // Check if password matches
//     if (inputPassword === 'adminboule') {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   };

//   // Early return with loading state
//   if (boulesData.length === 0 && !error) {
//     return (
//       <div className="App">
//         <div>
//           <input 
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Enter password"
//             className="password-input"
//           />
//         </div>
//         <div>Loading...</div>
//       </div>
//     );
//   }

//   // Show error if any
//   if (error) {
//     return (
//       <div className="App">
//         <div>
//           <input 
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Enter password"
//             className="password-input"
//           />
//         </div>
//         <div>Error: {error}</div>
//       </div>
//     );
//   }

//   const bouleMapping = boulesData.map((currentBoule, index) => {
//     if (!currentBoule) {
//       console.log(`Skipping undefined boule at index ${index}`);
//       return null;
//     }

//     return (
//       <div key={index} className="boulecarde">
//         <img
//           src={`/boulesia/${currentBoule.img}`}
//           alt={currentBoule.name || 'Profile image'}
//           style={{
//             width: '100%',
//             height: 'auto',
//             maxWidth: '500px'
//           }}
//           onError={(e) => {
//             console.error(`Error loading image for ${currentBoule.name}`);
//             e.target.style.display = 'none';
//           }}
//         />
        
//         <div>
//           {currentBoule.name && <p>{currentBoule.name}</p>}
          
//           {currentBoule.instagram && (
//             <p>
//               insta 📲{" "}
//               <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer">
//                 {currentBoule.instaname}
//               </a>
//             </p>
//           )}
          
//           {currentBoule.tiktok && (
//             <p>
//               tiktok 📲{" "}
//               <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer">
//                 {currentBoule.tiktokname}
//               </a>
//             </p>
//           )}
          
//           {currentBoule.link && (
//             <p>
//               liens 🔗{" "}
//               <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
//                 {currentBoule.linkname}
//               </a>
//             </p>
//           )}
          
//           {currentBoule.onlyfan && (
//             <p>
//               onlyfan 🔵{" "}
//               <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer">
//                 {currentBoule.onlyfanname}
//               </a>
//             </p>
//           )}
          
//           {currentBoule.telegram && (
//             <p>
//               telegram ↗️{" "}
//               <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer">
//                 {currentBoule.telegramname}
//               </a>
//             </p>
//           )}
          
//           {currentBoule.twitter && (
//             <p>
//               X (twitter) ⚔️{" "}
//               <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer">
//                 {currentBoule.twittername}
//               </a>
//             </p>
//           )}
//         </div>
        
//         <p className="messageprofile">{currentBoule.message}</p>
//       </div>
//     );
//   });

//   return (
//     <div className="App">
//       <div>
//         <input 
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           placeholder="Enter password"
//           className="password-input"
//         />
//         <button>send</button>
//       </div>
//       {isAuthenticated ? bouleMapping : <div>Please enter the correct password to view content</div>}
//     </div>
//   );
// }

// export default Secret;


import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import BouleContainer from './BouleContainer';
import Boulecontainerman from './Boulecontainerman';

function Secret() {
  const [boulesData, setBoulesData] = useState([]);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('Fetching data...');
    
    fetch('/boulesia/boules.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setBoulesData(data);
      })
      .catch(error => {
        console.error('Error loading boules data:', error);
        setError(error.message);
      });
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password === 'adminboule') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      alert('Incorrect password. Please try again.');
    }
    setPassword(''); // Clear password field after submission
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Early return with loading state
  if (boulesData.length === 0 && !error) {
    return (
      <div className="App">
        <div className="password-container">
          <input 
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter password"
            className="password-input"
          />
          <button onClick={handleSubmit} className="submit-button">
            Send
          </button>
        </div>
        <div>Loading...</div>
      </div>
    );
  }

  // Show error if any
  if (error) {
    return (
      <div className="App">
        <div className="password-container">
          <input 
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter password"
            className="password-input"
          />
          <button onClick={handleSubmit} className="submit-button">
            Send
          </button>
        </div>
        <div>Error: {error}</div>
      </div>
    );
  }

  const bouleMapping = boulesData.map((currentBoule, index) => {
    if (!currentBoule) {
      console.log(`Skipping undefined boule at index ${index}`);
      return null;
    }

    return (
      <div key={index} className="boulecarde" style={{ border:"1px solid black", margin:"10px", borderRadius:"10px" }}>
        <img
          src={`/boulesia/${currentBoule.img}`}
          alt={currentBoule.name || 'Profile image'}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '500px'
          }}
          onError={(e) => {
            console.error(`Error loading image for ${currentBoule.name}`);
            e.target.style.display = 'none';
          }}
        />
        
        <div>
          {currentBoule.name && <p>{currentBoule.name}</p>}
          
          {currentBoule.instagram && (
            <p>
              insta 📲{" "}
              <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer">
                {currentBoule.instaname}
              </a>
            </p>
          )}
          
          {currentBoule.tiktok && (
            <p>
              tiktok 📲{" "}
              <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer">
                {currentBoule.tiktokname}
              </a>
            </p>
          )}
          
          {currentBoule.link && (
            <p>
              liens 🔗{" "}
              <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
                {currentBoule.linkname}
              </a>
            </p>
          )}
          
          {currentBoule.onlyfan && (
            <p>
              onlyfan 🔵{" "}
              <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer">
                {currentBoule.onlyfanname}
              </a>
            </p>
          )}
          
          {currentBoule.telegram && (
            <p>
              telegram ↗️{" "}
              <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer">
                {currentBoule.telegramname}
              </a>
            </p>
          )}
          
          {currentBoule.twitter && (
            <p>
              X (twitter) ⚔️{" "}
              <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer">
                {currentBoule.twittername}
              </a>
            </p>
          )}
        </div>
        
        <p className="messageprofile">{currentBoule.message}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="password-container" >
        <input 
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter password"
          className="password-input"
        />
        <button onClick={handleSubmit} className="submit-button">
          Send
        </button>
      </div>
      {isAuthenticated ? bouleMapping : <div>Please enter the correct password to view content</div>}
      {/* {bouleMapping} */}
    </div>
  );
}

export default Secret;

