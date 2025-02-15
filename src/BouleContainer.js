// import React, { useState, useEffect } from "react";
// import './App.css';

// function BouleContainer() {
//     const [position, setPosition] = useState({ top: "50%", left: "50%" });
//     const [currentBoule, setCurrentBoule] = useState(null);
//     const [showRetryButton, setShowRetryButton] = useState(false);
//     const [boulesData, setBoulesData] = useState([]);
//     const [clickCount, setClickCount] = useState(0);

//     // Featured content array
//     const featuredContent = ["79","80"]; // IDs of boules to be shown every 10 clicks

//     // Fetch the JSON data when component mounts
//     useEffect(() => {
//         fetch('/boulesia/boules.json')
//             .then(response => response.json())
//             .then(data => setBoulesData(data))
//             .catch(error => console.error('Error loading boules data:', error));
//     }, []);

//     const handleShowBoule = () => {
//         const newClickCount = clickCount + 1;
//         setClickCount(newClickCount);

//         // Check if it's time to show a featured item
//         // if (newClickCount % 10 === 0) {
//         //     const featuredIndex = Math.floor(newClickCount / 10 - 1) % featuredContent.length;
//         //     const featuredId = featuredContent[featuredIndex];
//         //     const featuredItem = boulesData.find((item) => item.id === featuredId);

//         //     if (featuredItem) {
//         //         setCurrentBoule(featuredItem);
//         //         setShowRetryButton(true);
//         //         return;
//         //     }
//         // }

//         if (newClickCount % 4 === 0) {
//             const featuredIndex = Math.floor(newClickCount / 3 - 1) % featuredContent.length;
//             const featuredId = featuredContent[featuredIndex];
//             const featuredItem = boulesData.find((item) => item.id === featuredId);
        
//             if (featuredItem) {
//                 setCurrentBoule(featuredItem);
//                 setShowRetryButton(true);
//                 return;
//             }
//         }
        

//         // Otherwise, randomly select a boule
//         if (boulesData.length > 0) {
//             const randomIndex = Math.floor(Math.random() * boulesData.length);
//             const selectedBoule = boulesData[randomIndex];
            
//             // Create the full image URL
//             const imageUrl = `/boulesia/${selectedBoule.img}`;
//             selectedBoule.fullImageUrl = imageUrl;

//             setCurrentBoule(selectedBoule);
//             setShowRetryButton(true);
//         }
//     };

//     const handleRetry = () => {
//         setShowRetryButton(false);
//         setCurrentBoule(null);
//     };

//     // Function to generate random positions for the button
//     const randomizeButtonPosition = () => {
//         const randomTop = Math.floor(Math.random() * 80) + 10;
//         const randomLeft = Math.floor(Math.random() * 80) + 10;
//         setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
//     };

//     useEffect(() => {
//         const intervalId = setInterval(randomizeButtonPosition, 660);/////////////////////////////////////////////////////////////////////
//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div style={{ position: "relative", height: "100vh", width: "100%"}}>
//             <h3>Catch the peach</h3>

//             {currentBoule && (
//                 <div className="boulecarde">

//                     {/* Image display */}
//                     {currentBoule.img && currentBoule.img.map((image, index) => (
//                         <div>
//                         <img
//                             key={index}
//                             src={`/boulesia/${image}`}
//                             style={{ width: '90%', height: "auto", borderRadius: "16px", maxWidth: "500px" }}
//                             alt={`${currentBoule.name} - image ${index + 1}`}
//                         />
//                         </div>
//                     ))}


//                         {showRetryButton && (
//                                 <div style={{ textAlign: "center", marginTop: "20px", fontSize:"16px" }}>
//                                             <button
//                                                 className="boulecontainerbutton"
//                                                 onClick={handleRetry}
//                                                 // style={{
//                                                 //     padding: "10px 20px",
//                                                 //     fontSize: "16px",
//                                                 //     cursor: "pointer"
//                                                 // }}
//                                                  style={{
//                                                     padding: "16px 32px",
//                                                     fontSize: "16px",
//                                                     cursor: "pointer",
//                                                     background:"#AB9EFF",
//                                                     fontWeight:"bold",
//                                                     color:"#070707"
                                                   
//                                                 }}
                                                
                                                
//                                             >
//                                                 Réessayer
//                                             </button>
//                                         </div>
//                                     )}

//                     {/* Profile information */}
//                     <div className="cardboule">
//                         <p className="ProfilName">{currentBoule.name && currentBoule.name}</p>
//                         <div className="divbuttonlinkprofil" >
//                         <p className="messageprofile">{currentBoule.message}</p>
//                         </div>

//                         {currentBoule.instagram && (
//                             <button className="buttonlinkprofil">
//                                 <div className="divbuttonlinkprofil" >
//                                     {/* <div className="divbuttonlinkprofil divbuttonimagelinkprofil" >
//                                         <img src="Property 1=Instagram.svg" className="imgbuttonlinkprofil"/>
//                                     </div> */}
//                                     <div  className="divbuttonimagelinkprofilimg" >
//                                     <img src="Property 1=Instagram.svg" className="imgbuttonlinkprofil"/>
//                                     </div>
//                                     <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                               
//                                         <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                          {currentBoule.instaname}
//                                         </a>
//                                      </div>
//                                 </div>
                                
//                             </button>
//                         )}
//                         {currentBoule.tiktok && (
                         
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Tiktok.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.tiktokname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.link && (
//                             // <p>Links 🔗{" "}
//                             //     <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
//                             //         {currentBoule.linkname}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Link.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.link} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.linkname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.onlyfan && (
//                             // <p>OnlyFans 🔵{" "}
//                             //     <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.onlyfanname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Onlyfans.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.onlyfanname}
//                                 </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.telegram && (
//                             // <p>Telegram ↗️{" "}
//                             //     <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.telegramname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Telegram.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.telegramname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.twitter && (
//                             // <p>X (Twitter) ⚔️{" "}
//                             //     <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.twittername}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=X.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.twittername}
//                                </a>
//                                  </div>
//                             </div>
                            
//                             </button>
//                         )}
//                         {currentBoule.reddit && (
//                             // <p>Reddit{" "}
//                             //     <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.redditname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=X.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.redditname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>
//                         )}
//                         {currentBoule.youtube && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Youtube.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.youtubename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}



//                         {/* {currentBoule.youtube && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Youtube.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.youtubename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )} */}


//                         {currentBoule.fansly && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Fansly.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.fansly} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.fanslysname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}

//                         {currentBoule.manyvids && (
//                             // <p>Linkree{" "}
//                             //     <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.inkreename}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=manyvids.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.manyvids} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.manyvidsname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}


//                         {currentBoule.linkree && (
//                             // <p>Linkree{" "}
//                             //     <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.inkreename}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Link.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.inkreename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}
//                         {/* <div className="divbuttonlinkprofil" >
//                         <p className="messageprofile">{currentBoule.message}</p>
//                         </div> */}
                        
//                         {/* <div className="messageprofile"  >{currentBoule.message}</div> */}

//                     </div>
//                 </div>
//             )}

//             {!showRetryButton && (
//                 <button
//                     onClick={handleShowBoule}
//                     style={{
//                         position: "absolute",
//                         top: position.top,
//                         left: position.left,
//                         transform: "translate(-50%, -50%)",
//                         padding: "25px 25px",
//                         fontSize: "16px",
//                         cursor: "pointer",
//                         border: "solid 1px",
//                         borderRadius: "50px"
//                     }}
//                 >
//                     🍑
//                 </button>
//             )}

           
//         </div>
//     );
// }

// export default BouleContainer;




////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import './App.css';

// function BouleContainer() {
//     const [position, setPosition] = useState({ top: "50%", left: "50%" });
//     const [currentBoule, setCurrentBoule] = useState(null);
//     const [showRetryButton, setShowRetryButton] = useState(false);
//     const [boulesData, setBoulesData] = useState([]);
//     const [clickCount, setClickCount] = useState(0);

//     // Featured content array
//     const featuredContent = ["79","80"]; // IDs of boules to be shown every 10 clicks

//     // Fetch the JSON data when component mounts
//     useEffect(() => {
//         fetch('/boulesia/boules.json')
//             .then(response => response.json())
//             .then(data => setBoulesData(data))
//             .catch(error => console.error('Error loading boules data:', error));
//     }, []);

//     const handleShowBoule = () => {
//         const newClickCount = clickCount + 1;
//         setClickCount(newClickCount);

//         // Check if it's time to show a featured item
//         // if (newClickCount % 10 === 0) {
//         //     const featuredIndex = Math.floor(newClickCount / 10 - 1) % featuredContent.length;
//         //     const featuredId = featuredContent[featuredIndex];
//         //     const featuredItem = boulesData.find((item) => item.id === featuredId);

//         //     if (featuredItem) {
//         //         setCurrentBoule(featuredItem);
//         //         setShowRetryButton(true);
//         //         return;
//         //     }
//         // }

//         if (newClickCount % 4 === 0) {
//             const featuredIndex = Math.floor(newClickCount / 3 - 1) % featuredContent.length;
//             const featuredId = featuredContent[featuredIndex];
//             const featuredItem = boulesData.find((item) => item.id === featuredId);
        
//             if (featuredItem) {
//                 setCurrentBoule(featuredItem);
//                 setShowRetryButton(true);
//                 return;
//             }
//         }
        

//         // Otherwise, randomly select a boule
//         if (boulesData.length > 0) {
//             const randomIndex = Math.floor(Math.random() * boulesData.length);
//             const selectedBoule = boulesData[randomIndex];
            
//             // Create the full image URL
//             const imageUrl = `/boulesia/${selectedBoule.img}`;
//             selectedBoule.fullImageUrl = imageUrl;

//             setCurrentBoule(selectedBoule);
//             setShowRetryButton(true);
//         }
//     };

//     const handleRetry = () => {
//         setShowRetryButton(false);
//         setCurrentBoule(null);
//     };

//     // Function to generate random positions for the button
//     const randomizeButtonPosition = () => {
//         const randomTop = Math.floor(Math.random() * 80) + 10;
//         const randomLeft = Math.floor(Math.random() * 80) + 10;
//         setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             // Adjust interval duration based on screen width
//             if (window.innerWidth < 500) { // Mobile devices
//                 return 660; // Faster movement (500ms)
//             } else if (window.innerWidth < 1024) { // Tablets
//                 return 1000; // Original speed
//             } else { // Desktop
//                 return 1000; // Slower movement (1 second)
//             }
//         };
    
//         // Set initial interval
//         let intervalDuration = handleResize();
//         const intervalId = setInterval(randomizeButtonPosition, intervalDuration);
    
//         // Update interval on window resize
//         const resizeHandler = () => {
//             clearInterval(intervalId);
//             intervalDuration = handleResize();
//             setInterval(randomizeButtonPosition, intervalDuration);
//         };
    
//         window.addEventListener('resize', resizeHandler);
    
//         return () => {
//             clearInterval(intervalId);
//             window.removeEventListener('resize', resizeHandler);
//         };
//     }, []);
//     return (
//         <div style={{ position: "relative", height: "100vh", width: "100%"}}>
//             <h3>Catch the peach</h3>

//             {currentBoule && (
//                 <div className="boulecarde">

//                     {/* Image display */}
//                     {currentBoule.img && currentBoule.img.map((image, index) => (
//                         <div>
//                         <img
//                             key={index}
//                             src={`/boulesia/${image}`}
//                             style={{ width: '90%', height: "auto", borderRadius: "16px", maxWidth: "500px" }}
//                             alt={`${currentBoule.name} - image ${index + 1}`}
//                         />
//                         </div>
//                     ))}


//                         {showRetryButton && (
//                                 <div style={{ textAlign: "center", marginTop: "20px", fontSize:"16px" }}>
//                                             <button
//                                                 className="boulecontainerbutton"
//                                                 onClick={handleRetry}
//                                                 // style={{
//                                                 //     padding: "10px 20px",
//                                                 //     fontSize: "16px",
//                                                 //     cursor: "pointer"
//                                                 // }}
//                                                  style={{
//                                                     padding: "16px 32px",
//                                                     fontSize: "16px",
//                                                     cursor: "pointer",
//                                                     background:"#AB9EFF",
//                                                     fontWeight:"bold",
//                                                     color:"#070707"
                                                   
//                                                 }}
                                                
                                                
//                                             >
//                                                 Réessayer
//                                             </button>
//                                         </div>
//                                     )}

//                     {/* Profile information */}
//                     <div className="cardboule">
//                         <p className="ProfilName">{currentBoule.name && currentBoule.name}</p>
//                         <div className="divbuttonlinkprofil" >
//                         <p className="messageprofile">{currentBoule.message}</p>
//                         </div>

//                         {currentBoule.instagram && (
//                             <button className="buttonlinkprofil">
//                                 <div className="divbuttonlinkprofil" >
//                                     {/* <div className="divbuttonlinkprofil divbuttonimagelinkprofil" >
//                                         <img src="Property 1=Instagram.svg" className="imgbuttonlinkprofil"/>
//                                     </div> */}
//                                     <div  className="divbuttonimagelinkprofilimg" >
//                                     <img src="Property 1=Instagram.svg" className="imgbuttonlinkprofil"/>
//                                     </div>
//                                     <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                               
//                                         <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                          {currentBoule.instaname}
//                                         </a>
//                                      </div>
//                                 </div>
                                
//                             </button>
//                         )}
//                         {currentBoule.tiktok && (
                         
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Tiktok.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.tiktokname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.link && (
//                             // <p>Links 🔗{" "}
//                             //     <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
//                             //         {currentBoule.linkname}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Link.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.link} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.linkname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.onlyfan && (
//                             // <p>OnlyFans 🔵{" "}
//                             //     <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.onlyfanname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Onlyfans.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.onlyfanname}
//                                 </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.telegram && (
//                             // <p>Telegram ↗️{" "}
//                             //     <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.telegramname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Telegram.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.telegramname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.twitter && (
//                             // <p>X (Twitter) ⚔️{" "}
//                             //     <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.twittername}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=X.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.twittername}
//                                </a>
//                                  </div>
//                             </div>
                            
//                             </button>
//                         )}
//                         {currentBoule.reddit && (
//                             // <p>Reddit{" "}
//                             //     <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.redditname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=X.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.redditname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>
//                         )}
//                         {currentBoule.youtube && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Youtube.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.youtubename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}



//                         {/* {currentBoule.youtube && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Youtube.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.youtubename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )} */}


//                         {currentBoule.fansly && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Fansly.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.fansly} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.fanslysname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}

//                         {currentBoule.manyvids && (
//                             // <p>Linkree{" "}
//                             //     <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.inkreename}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=manyvids.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.manyvids} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.manyvidsname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}


//                         {currentBoule.linkree && (
//                             // <p>Linkree{" "}
//                             //     <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.inkreename}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Link.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.inkreename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}
//                         {/* <div className="divbuttonlinkprofil" >
//                         <p className="messageprofile">{currentBoule.message}</p>
//                         </div> */}
                        
//                         {/* <div className="messageprofile"  >{currentBoule.message}</div> */}

//                     </div>
//                 </div>
//             )}

//             {!showRetryButton && (
//                 <button
//                     onClick={handleShowBoule}
//                     style={{
//                         position: "absolute",
//                         top: position.top,
//                         left: position.left,
//                         transform: "translate(-50%, -50%)",
//                         padding: "25px 25px",
//                         fontSize: "16px",
//                         cursor: "pointer",
//                         border: "solid 1px",
//                         borderRadius: "50px"
//                     }}
//                 >
//                     🍑
//                 </button>
//             )}

           
//         </div>
//     );
// }

// export default BouleContainer;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect, useRef } from "react";
// import './App.css';

// function BouleContainer() {
//     const [position, setPosition] = useState({ top: "50%", left: "50%" });
//     const [currentBoule, setCurrentBoule] = useState(null);
//     const [showRetryButton, setShowRetryButton] = useState(false);
//     const [boulesData, setBoulesData] = useState([]);
//     const [clickCount, setClickCount] = useState(0);
//     const intervalRef = useRef(null);

//     // Featured content array
//     const featuredContent = ["79","80"]; // IDs of boules to be shown every 10 clicks

//     // Fetch the JSON data when component mounts
//     useEffect(() => {
//         fetch('/boulesia/boules.json')
//             .then(response => response.json())
//             .then(data => setBoulesData(data))
//             .catch(error => console.error('Error loading boules data:', error));
//     }, []);

//     const handleShowBoule = () => {
//         const newClickCount = clickCount + 1;
//         setClickCount(newClickCount);

//         // Check if it's time to show a featured item
//         // if (newClickCount % 10 === 0) {
//         //     const featuredIndex = Math.floor(newClickCount / 10 - 1) % featuredContent.length;
//         //     const featuredId = featuredContent[featuredIndex];
//         //     const featuredItem = boulesData.find((item) => item.id === featuredId);

//         //     if (featuredItem) {
//         //         setCurrentBoule(featuredItem);
//         //         setShowRetryButton(true);
//         //         return;
//         //     }
//         // }

//         if (newClickCount % 4 === 0) {
//             const featuredIndex = Math.floor(newClickCount / 3 - 1) % featuredContent.length;
//             const featuredId = featuredContent[featuredIndex];
//             const featuredItem = boulesData.find((item) => item.id === featuredId);
        
//             if (featuredItem) {
//                 setCurrentBoule(featuredItem);
//                 setShowRetryButton(true);
//                 return;
//             }
//         }
        

//         // Otherwise, randomly select a boule
//         if (boulesData.length > 0) {
//             const randomIndex = Math.floor(Math.random() * boulesData.length);
//             const selectedBoule = boulesData[randomIndex];
            
//             // Create the full image URL
//             const imageUrl = `/boulesia/${selectedBoule.img}`;
//             selectedBoule.fullImageUrl = imageUrl;

//             setCurrentBoule(selectedBoule);
//             setShowRetryButton(true);
//         }
//     };

//     const handleRetry = () => {
//         setShowRetryButton(false);
//         setCurrentBoule(null);
//     };

//     // Function to generate random positions for the button
//     const randomizeButtonPosition = () => {
//         const randomTop = Math.floor(Math.random() * 80) + 10;
//         const randomLeft = Math.floor(Math.random() * 80) + 10;
//         setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             // Adjust interval duration based on screen width
//             if (window.innerWidth < 500) { // Mobile devices
//                 return 660; // Faster movement (500ms)
//             } else if (window.innerWidth < 1024) { // Tablets
//                 return 1000; // Original speed
//             } else { // Desktop
//                 return 1000; // Slower movement (1 second)
//             }
//         };
    
//         // Set initial interval
//         let intervalDuration = handleResize();
//         const intervalId = setInterval(randomizeButtonPosition, intervalDuration);
    
//         // Update interval on window resize
//         const resizeHandler = () => {
//             clearInterval(intervalId);
//             intervalDuration = handleResize();
//             setInterval(randomizeButtonPosition, intervalDuration);
//         };
    
//         window.addEventListener('resize', resizeHandler);
    
//         return () => {
//             clearInterval(intervalId);
//             window.removeEventListener('resize', resizeHandler);
//         };
//     }, []);
    
//     return (
//         <div style={{ position: "relative", height: "100vh", width: "100%"}}>
//             <h3>Catch the peach</h3>

//             {currentBoule && (
//                 <div className="boulecarde">

//                     {/* Image display */}
//                     {currentBoule.img && currentBoule.img.map((image, index) => (
//                         <div>
//                         <img
//                             key={index}
//                             src={`/boulesia/${image}`}
//                             style={{ width: '90%', height: "auto", borderRadius: "16px", maxWidth: "500px" }}
//                             alt={`${currentBoule.name} - image ${index + 1}`}
//                         />
//                         </div>
//                     ))}


//                         {showRetryButton && (
//                                 <div style={{ textAlign: "center", marginTop: "20px", fontSize:"16px" }}>
//                                             <button
//                                                 className="boulecontainerbutton"
//                                                 onClick={handleRetry}
//                                                 // style={{
//                                                 //     padding: "10px 20px",
//                                                 //     fontSize: "16px",
//                                                 //     cursor: "pointer"
//                                                 // }}
//                                                  style={{
//                                                     padding: "16px 32px",
//                                                     fontSize: "16px",
//                                                     cursor: "pointer",
//                                                     background:"#AB9EFF",
//                                                     fontWeight:"bold",
//                                                     color:"#070707"
                                                   
//                                                 }}
                                                
                                                
//                                             >
//                                                 Réessayer
//                                             </button>
//                                         </div>
//                                     )}

//                     {/* Profile information */}
//                     <div className="cardboule">
//                         <p className="ProfilName">{currentBoule.name && currentBoule.name}</p>
//                         <div className="divbuttonlinkprofil" >
//                         <p className="messageprofile">{currentBoule.message}</p>
//                         </div>

//                         {currentBoule.instagram && (
//                             <button className="buttonlinkprofil">
//                                 <div className="divbuttonlinkprofil" >
//                                     {/* <div className="divbuttonlinkprofil divbuttonimagelinkprofil" >
//                                         <img src="Property 1=Instagram.svg" className="imgbuttonlinkprofil"/>
//                                     </div> */}
//                                     <div  className="divbuttonimagelinkprofilimg" >
//                                     <img src="Property 1=Instagram.svg" className="imgbuttonlinkprofil"/>
//                                     </div>
//                                     <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                               
//                                         <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                          {currentBoule.instaname}
//                                         </a>
//                                      </div>
//                                 </div>
                                
//                             </button>
//                         )}
//                         {currentBoule.tiktok && (
                         
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Tiktok.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.tiktokname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.link && (
//                             // <p>Links 🔗{" "}
//                             //     <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
//                             //         {currentBoule.linkname}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Link.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.link} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.linkname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.onlyfan && (
//                             // <p>OnlyFans 🔵{" "}
//                             //     <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.onlyfanname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Onlyfans.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.onlyfanname}
//                                 </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.telegram && (
//                             // <p>Telegram ↗️{" "}
//                             //     <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.telegramname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Telegram.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.telegramname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                         </button>
//                         )}
//                         {currentBoule.twitter && (
//                             // <p>X (Twitter) ⚔️{" "}
//                             //     <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.twittername}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=X.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.twittername}
//                                </a>
//                                  </div>
//                             </div>
                            
//                             </button>
//                         )}
//                         {currentBoule.reddit && (
//                             // <p>Reddit{" "}
//                             //     <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.redditname}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=X.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.redditname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>
//                         )}
//                         {currentBoule.youtube && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Youtube.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.youtubename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}



//                         {/* {currentBoule.youtube && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Youtube.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.youtubename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )} */}


//                         {currentBoule.fansly && (
//                             // <p>YouTube 🔺{" "}
//                             //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                             //         {currentBoule.youtubename}
//                             //     </a>
//                             // </p>
//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Fansly.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.fansly} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
//                                      {currentBoule.fanslysname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}

//                         {currentBoule.manyvids && (
//                             // <p>Linkree{" "}
//                             //     <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.inkreename}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=manyvids.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.manyvids} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.manyvidsname}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}


//                         {currentBoule.linkree && (
//                             // <p>Linkree{" "}
//                             //     <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                             //         {currentBoule.inkreename}
//                             //     </a>
//                             // </p>

//                             <button className="buttonlinkprofil">
//                             <div className="divbuttonlinkprofil" >
                            
//                                 <div  className="divbuttonimagelinkprofilimg" >
//                                 <img src="Property 1=Link.svg" className="imgbuttonlinkprofil"/>
//                                 </div>
//                                 <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
//                                 <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
//                                      {currentBoule.inkreename}
//                                  </a>
//                                  </div>
//                             </div>
                            
//                             </button>



//                         )}
//                         {/* <div className="divbuttonlinkprofil" >
//                         <p className="messageprofile">{currentBoule.message}</p>
//                         </div> */}
                        
//                         {/* <div className="messageprofile"  >{currentBoule.message}</div> */}

//                     </div>
//                 </div>
//             )}

//             {!showRetryButton && (
//                 <button
//                     onClick={handleShowBoule}
//                     style={{
//                         position: "absolute",
//                         top: position.top,
//                         left: position.left,
//                         transform: "translate(-50%, -50%)",
//                         padding: "25px 25px",
//                         fontSize: "16px",
//                         cursor: "pointer",
//                         border: "solid 1px",
//                         borderRadius: "50px"
//                     }}
//                 >
//                     🍑
//                 </button>
//             )}

           
//         </div>
//     );
// }

// export default BouleContainer;


////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect, useRef,useCallback } from "react";
import './App.css';

function BouleContainer() {
    const [position, setPosition] = useState({ top: "50%", left: "50%" });
    const [currentBoule, setCurrentBoule] = useState(null);
    const [showRetryButton, setShowRetryButton] = useState(false);
    const [boulesData, setBoulesData] = useState([]);
    const [clickCount, setClickCount] = useState(0);
    const intervalRef = useRef(null);

    // Featured content array
    const featuredContent = ["79","80"]; // IDs of boules to be shown every 10 clicks

    // Fetch the JSON data when component mounts
    useEffect(() => {
        fetch('/boulesia/boules.json')
            .then(response => response.json())
            .then(data => setBoulesData(data))
            .catch(error => console.error('Error loading boules data:', error));
    }, []);

    const handleShowBoule = () => {
        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);

        // Check if it's time to show a featured item
        // if (newClickCount % 10 === 0) {
        //     const featuredIndex = Math.floor(newClickCount / 10 - 1) % featuredContent.length;
        //     const featuredId = featuredContent[featuredIndex];
        //     const featuredItem = boulesData.find((item) => item.id === featuredId);

        //     if (featuredItem) {
        //         setCurrentBoule(featuredItem);
        //         setShowRetryButton(true);
        //         return;
        //     }
        // }

        if (newClickCount % 4 === 0) {
            const featuredIndex = Math.floor(newClickCount / 3 - 1) % featuredContent.length;
            const featuredId = featuredContent[featuredIndex];
            const featuredItem = boulesData.find((item) => item.id === featuredId);
        
            if (featuredItem) {
                setCurrentBoule(featuredItem);
                setShowRetryButton(true);
                return;
            }
        }
        

        // Otherwise, randomly select a boule
        if (boulesData.length > 0) {
            const randomIndex = Math.floor(Math.random() * boulesData.length);
            const selectedBoule = boulesData[randomIndex];
            
            // Create the full image URL
            const imageUrl = `/boulesia/${selectedBoule.img}`;
            selectedBoule.fullImageUrl = imageUrl;

            setCurrentBoule(selectedBoule);
            setShowRetryButton(true);
        }
    };

    const handleRetry = () => {
        setShowRetryButton(false);
        setCurrentBoule(null);
    };

    // Function to generate random positions for the button
    // Move randomizeButtonPosition above useEffect that uses it
    const randomizeButtonPosition = useCallback(() => {
        const randomTop = Math.floor(Math.random() * 80) + 10;
        const randomLeft = Math.floor(Math.random() * 80) + 10;
        setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    }, []);

    useEffect(() => {
        const getIntervalDuration = () => {
            if (window.innerWidth < 500) return 660;
            if (window.innerWidth < 1024) return 1000;
            return 1000;
        };

        const handleResize = () => {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(
                randomizeButtonPosition, 
                getIntervalDuration()
            );
        };

        // Initial setup
        intervalRef.current = setInterval(
            randomizeButtonPosition, 
            getIntervalDuration()
        );

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(intervalRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [randomizeButtonPosition]); // Add dependency here

    
    return (
        <div style={{ position: "relative", height: "100vh", width: "100%"}}>
            <h3>Catch the peach</h3>

            {currentBoule && (
                <div className="boulecarde">

                    {/* Image display */}
                    {currentBoule.img && currentBoule.img.map((image, index) => (
                        <div>
                        <img
                            key={index}
                            src={`/boulesia/${image}`}
                            style={{ width: '90%', height: "auto", borderRadius: "16px", maxWidth: "500px" }}
                            alt={`${currentBoule.name} - image ${index + 1}`}
                        />
                        </div>
                    ))}


                        {showRetryButton && (
                                <div style={{ textAlign: "center", marginTop: "20px", fontSize:"16px" }}>
                                            <button
                                                className="boulecontainerbutton"
                                                onClick={handleRetry}
                                                // style={{
                                                //     padding: "10px 20px",
                                                //     fontSize: "16px",
                                                //     cursor: "pointer"
                                                // }}
                                                 style={{
                                                    padding: "16px 32px",
                                                    fontSize: "16px",
                                                    cursor: "pointer",
                                                    background:"#AB9EFF",
                                                    fontWeight:"bold",
                                                    color:"#070707"
                                                   
                                                }}
                                                
                                                
                                            >
                                                Réessayer
                                            </button>
                                        </div>
                                    )}

                    {/* Profile information */}
                    <div className="cardboule">
                        <p className="ProfilName">{currentBoule.name && currentBoule.name}</p>
                        <div className="divbuttonlinkprofil" >
                        <p className="messageprofile">{currentBoule.message}</p>
                        </div>

                        {currentBoule.instagram && (
                            <button className="buttonlinkprofil">
                                <div className="divbuttonlinkprofil" >
                                    {/* <div className="divbuttonlinkprofil divbuttonimagelinkprofil" >
                                        <img src="Property 1=Instagram.svg" className="imgbuttonlinkprofil"/>
                                    </div> */}
                                    <div  className="divbuttonimagelinkprofilimg" >
                                    <img src="Property 1=Instagram.svg" className="imgbuttonlinkprofil"/>
                                    </div>
                                    <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                               
                                        <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                         {currentBoule.instaname}
                                        </a>
                                     </div>
                                </div>
                                
                            </button>
                        )}
                        {currentBoule.tiktok && (
                         
                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=Tiktok.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                     {currentBoule.tiktokname}
                                 </a>
                                 </div>
                            </div>
                            
                        </button>
                        )}
                        {currentBoule.link && (
                            // <p>Links 🔗{" "}
                            //     <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
                            //         {currentBoule.linkname}
                            //     </a>
                            // </p>

                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=Link.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.link} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                     {currentBoule.linkname}
                                 </a>
                                 </div>
                            </div>
                            
                        </button>
                        )}
                        {currentBoule.onlyfan && (
                            // <p>OnlyFans 🔵{" "}
                            //     <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                            //         {currentBoule.onlyfanname}
                            //     </a>
                            // </p>
                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=Onlyfans.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                     {currentBoule.onlyfanname}
                                </a>
                                 </div>
                            </div>
                            
                        </button>
                        )}
                        {currentBoule.telegram && (
                            // <p>Telegram ↗️{" "}
                            //     <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                            //         {currentBoule.telegramname}
                            //     </a>
                            // </p>
                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=Telegram.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                     {currentBoule.telegramname}
                                 </a>
                                 </div>
                            </div>
                            
                        </button>
                        )}
                        {currentBoule.twitter && (
                            // <p>X (Twitter) ⚔️{" "}
                            //     <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                            //         {currentBoule.twittername}
                            //     </a>
                            // </p>
                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=X.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                     {currentBoule.twittername}
                               </a>
                                 </div>
                            </div>
                            
                            </button>
                        )}
                        {currentBoule.reddit && (
                            // <p>Reddit{" "}
                            //     <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                            //         {currentBoule.redditname}
                            //     </a>
                            // </p>
                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=X.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                     {currentBoule.redditname}
                                 </a>
                                 </div>
                            </div>
                            
                            </button>
                        )}
                        {currentBoule.youtube && (
                            // <p>YouTube 🔺{" "}
                            //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
                            //         {currentBoule.youtubename}
                            //     </a>
                            // </p>
                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=Youtube.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
                                     {currentBoule.youtubename}
                                 </a>
                                 </div>
                            </div>
                            
                            </button>



                        )}



                        {/* {currentBoule.youtube && (
                            // <p>YouTube 🔺{" "}
                            //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
                            //         {currentBoule.youtubename}
                            //     </a>
                            // </p>
                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=Youtube.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
                                     {currentBoule.youtubename}
                                 </a>
                                 </div>
                            </div>
                            
                            </button>



                        )} */}


                        {currentBoule.fansly && (
                            // <p>YouTube 🔺{" "}
                            //     <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
                            //         {currentBoule.youtubename}
                            //     </a>
                            // </p>
                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=Fansly.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.fansly} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk" >
                                     {currentBoule.fanslysname}
                                 </a>
                                 </div>
                            </div>
                            
                            </button>



                        )}

                        {currentBoule.manyvids && (
                            // <p>Linkree{" "}
                            //     <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                            //         {currentBoule.inkreename}
                            //     </a>
                            // </p>

                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=manyvids.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.manyvids} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                     {currentBoule.manyvidsname}
                                 </a>
                                 </div>
                            </div>
                            
                            </button>



                        )}


                        {currentBoule.linkree && (
                            // <p>Linkree{" "}
                            //     <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                            //         {currentBoule.inkreename}
                            //     </a>
                            // </p>

                            <button className="buttonlinkprofil">
                            <div className="divbuttonlinkprofil" >
                            
                                <div  className="divbuttonimagelinkprofilimg" >
                                <img src="Property 1=Link.svg" className="imgbuttonlinkprofil"/>
                                </div>
                                <div className="divbuttonlinkprofil divbuttonimagelinkprofiltext">
                           
                                <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer" className="divbuttonimagelinkprofillinlk">
                                     {currentBoule.inkreename}
                                 </a>
                                 </div>
                            </div>
                            
                            </button>



                        )}
                        {/* <div className="divbuttonlinkprofil" >
                        <p className="messageprofile">{currentBoule.message}</p>
                        </div> */}
                        
                        {/* <div className="messageprofile"  >{currentBoule.message}</div> */}

                    </div>
                </div>
            )}

            {!showRetryButton && (
                // <button
                //     onClick={handleShowBoule}
                //     style={{
                //         position: "absolute",
                //         top: position.top,
                //         left: position.left,
                //         transform: "translate(-50%, -50%)",
                //         padding: "25px 25px",
                //         fontSize: "16px",
                //         cursor: "pointer",
                //         border: "solid 1px",
                //         borderRadius: "50px"
                //     }}
                // >
                //     🍑
                // </button>

                <button
                onClick={handleShowBoule}
                style={{
                    position: "absolute",
                    top: position.top,
                    left: position.left,
                    transform: "translate(-50%, -50%)",
                    padding: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                 
                    borderRadius: "50px",
                    // background:"transparent",
                    border:"none",
                    // border: "solid 1px white",
                    backgroundColor:"transparent"
                }}
            >
                <img src="Peach (1).svg" alt="peach" style={{ width: "70px", height: "70px" }} />
            </button>
            )}

           
        </div>
    );
}

export default BouleContainer;