// import React, { useState, useEffect } from "react";
// import './App.css';

// function BouleContainer() {
//     const [position, setPosition] = useState({ top: "50%", left: "50%" });
//     const [currentBoule, setCurrentBoule] = useState(null);
//     const [showRetryButton, setShowRetryButton] = useState(false);
//     const [boulesData, setBoulesData] = useState([]);

//     // Fetch the JSON data when component mounts
//     useEffect(() => {
//         fetch('/boulesia/boules.json')
//             .then(response => response.json())
//             .then(data => setBoulesData(data))
//             .catch(error => console.error('Error loading boules data:', error));
//     }, []);

//     const handleShowBoule = () => {
//         // Randomly select a boule from the data
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
//         const intervalId = setInterval(randomizeButtonPosition, 650000);/////////////////////////////////////////////////////////////////////
//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div style={{ position: "relative", height: "100vh", width: "100%" }}>
//             <h3>Catch the peach</h3>

//             {currentBoule && (
//                 <div className="boulecarde">

//                     {/* image  */}
//                     {/* <img
//                         src={currentBoule.fullImageUrl}
//                         style={{ width: '90%', height: "auto", borderRadius: "5px", maxWidth:"500px" }}
//                         alt={currentBoule.name}
//                     /> */}

//                     {currentBoule.img && currentBoule.img.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={`/boulesia/${image}`}
//                                 style={{ width: '90%', height: "auto", borderRadius: "5px", maxWidth: "500px" }}
//                                 alt={`${currentBoule.name} - image ${index + 1}`}
//                             />
//                         ))}
//                     {/* profile info container  */}
//                     <div >
//                     {/* <div className="infocontainer"> */}
//                         <p>{currentBoule.name && (currentBoule.name) }</p> {/* nom  */}
//                         {/* <p>{currentBoule.id && (currentBoule.id) }</p> */}
//                         {/* insta  */}
//                         {currentBoule.instagram && ( <p>insta 📲{" "}<a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.instaname }
//                          </a> </p>)}

//                            {/* tiktok */}
//                        {currentBoule.tiktok  && ( <p>tiktok 📲 {" "}<a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.tiktokname }
//                          </a> </p>)}
                        
                        
//                          {/* link */}
//                        {currentBoule.link  && ( <p>liens 🔗{" "}<a href={currentBoule.link} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.linkname }
//                          </a> </p>)}

//                           {/* onlyfan */}
//                        {currentBoule.onlyfan  && ( <p> onlyfan 🔵{" "}<a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.onlyfanname }
//                          </a> </p>)}

//                               {/* telegram */}
//                        {currentBoule.telegram  && ( <p> telegram ↗️{" "}<a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.telegramname }
//                          </a> </p>)}

//                                {/* twitter*/}
//                        {currentBoule.twitter && ( <p>X (twitter) ⚔️ {" "}<a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.twittername }
//                          </a> </p>)}

//                          {currentBoule.reddit && ( <p> reddit {" "}<a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.redditname }
//                          </a> </p>)}

//                          {currentBoule.youtube && ( <p> youtube 🔺 {" "}<a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.youtubename}
//                          </a> </p>)}

//                          {currentBoule.linkree && ( <p> link {" "}<a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer"> {/* insta  */}
//                          {currentBoule.inkreename}
//                          </a> </p>)}
                        
                        
//                          <p className="messageprofile">{currentBoule.message}</p>
//                     </div>
//                     {/* <p className="messageprofile">{currentBoule.message}</p> */}
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

//             {showRetryButton && (
//                 <div style={{ textAlign: "center", marginTop: "20px" }}>
//                     <button 
//                         className="boulecontainerbutton"
//                         onClick={handleRetry}
//                         style={{
//                             padding: "10px 20px",
//                             fontSize: "16px",
//                             cursor: "pointer"
//                         }}
//                     >
//                         Réessayer
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default BouleContainer;





/////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import './App.css';

function BouleContainer() {
    const [position, setPosition] = useState({ top: "50%", left: "50%" });
    const [currentBoule, setCurrentBoule] = useState(null);
    const [showRetryButton, setShowRetryButton] = useState(false);
    const [boulesData, setBoulesData] = useState([]);
    const [clickCount, setClickCount] = useState(0);

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
    const randomizeButtonPosition = () => {
        const randomTop = Math.floor(Math.random() * 80) + 10;
        const randomLeft = Math.floor(Math.random() * 80) + 10;
        setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    };

    useEffect(() => {
        const intervalId = setInterval(randomizeButtonPosition, 660);/////////////////////////////////////////////////////////////////////
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ position: "relative", height: "100vh", width: "100%" }}>
            <h3>Catch the peach</h3>

            {currentBoule && (
                <div className="boulecarde">

                    {/* Image display */}
                    {currentBoule.img && currentBoule.img.map((image, index) => (
                        <img
                            key={index}
                            src={`/boulesia/${image}`}
                            style={{ width: '90%', height: "auto", borderRadius: "5px", maxWidth: "500px" }}
                            alt={`${currentBoule.name} - image ${index + 1}`}
                        />
                    ))}

                    {/* Profile information */}
                    <div>
                        <p>{currentBoule.name && currentBoule.name}</p>
                        {currentBoule.instagram && (
                            <p>Instagram 📲{" "}
                                <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.instaname}
                                </a>
                            </p>
                        )}
                        {currentBoule.tiktok && (
                            <p>TikTok 📲{" "}
                                <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.tiktokname}
                                </a>
                            </p>
                        )}
                        {currentBoule.link && (
                            <p>Links 🔗{" "}
                                <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.linkname}
                                </a>
                            </p>
                        )}
                        {currentBoule.onlyfan && (
                            <p>OnlyFans 🔵{" "}
                                <a href={currentBoule.onlyfan} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.onlyfanname}
                                </a>
                            </p>
                        )}
                        {currentBoule.telegram && (
                            <p>Telegram ↗️{" "}
                                <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.telegramname}
                                </a>
                            </p>
                        )}
                        {currentBoule.twitter && (
                            <p>X (Twitter) ⚔️{" "}
                                <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.twittername}
                                </a>
                            </p>
                        )}
                        {currentBoule.reddit && (
                            <p>Reddit{" "}
                                <a href={currentBoule.reddit} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.redditname}
                                </a>
                            </p>
                        )}
                        {currentBoule.youtube && (
                            <p>YouTube 🔺{" "}
                                <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.youtubename}
                                </a>
                            </p>
                        )}
                        {currentBoule.linkree && (
                            <p>Linkree{" "}
                                <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.inkreename}
                                </a>
                            </p>
                        )}
                        <p className="messageprofile">{currentBoule.message}</p>
                    </div>
                </div>
            )}

            {!showRetryButton && (
                <button
                    onClick={handleShowBoule}
                    style={{
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                        transform: "translate(-50%, -50%)",
                        padding: "25px 25px",
                        fontSize: "16px",
                        cursor: "pointer",
                        border: "solid 1px",
                        borderRadius: "50px"
                    }}
                >
                    🍑
                </button>
            )}

            {showRetryButton && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button
                        className="boulecontainerbutton"
                        onClick={handleRetry}
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                    >
                        Réessayer
                    </button>
                </div>
            )}
        </div>
    );
}

export default BouleContainer;
