import React, { useState, useEffect } from "react";

function Userprofil() {
    const [currentBoule, setCurrentBoule] = useState(null);
    const [boulesData, setBoulesData] = useState([]);
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("");
    const [selectedVille, setSelectedVille] = useState("");
    const [selectedNiveau, setSelectedNiveau] = useState("");
    const [selectedId, setSelectedId] = useState(""); // For filtering by ID
    const [selectedRecordId, setSelectedRecordId] = useState(""); // For filtering by record ID
    const [filteredData, setFilteredData] = useState([]);
    const [clickCount, setClickCount] = useState(0);
    const [showDiv, setShowDiv] = useState(false);
     
      // const [showDivTime, setShowDivTime] = useState(true);
    const [showLoadingMessage, setShowLoadingMessage] = useState(false);
    
    


    // Featured content array - add the IDs of the elements you want to show every 5 clicks
    const featuredContent = [
        // Add featured IDs if necessary
    ];

    useEffect(() => {
        fetch('/boulesia/boules.json')
            .then(response => response.json())
            .then(data => {
                setBoulesData(data);
                setFilteredData(data);
            })
            .catch(error => console.error('Error loading boules data:', error));
    }, []);

    useEffect(() => {
        const filtered = boulesData.filter(boule => {
            const matchGender = !selectedGender || (boule.genre && boule.genre.toLowerCase() === selectedGender.toLowerCase());
            const matchDomain = !selectedDomain.length ||
                (boule.domaine && Array.isArray(boule.domaine) &&
                boule.domaine.some(d => selectedDomain.includes(d.toLowerCase())));

            let matchVille = false;
            if (selectedVille) {
                if (selectedVille === 'ile-de-france') {
                    matchVille = ['Paris', 'Essonne', 'Hauts-de-Seine', 'Seine-Saint-Denis', 'Val-de-Marne', 'Val-d\'Oise', 'Seine-et-Marne', 'Yvelines'].includes(boule.ville);
                } else {
                    matchVille = boule.ville && boule.ville.toLowerCase() === selectedVille.toLowerCase();
                }
            } else {
                matchVille = true;
            }

            const matchNiveau = !selectedNiveau || (boule.niveau && boule.niveau.toLowerCase() === selectedNiveau.toLowerCase());
            const matchId = !selectedId || (boule.id && boule.id.toString() === selectedId); // Match by ID
            const matchRecordId = !selectedRecordId || (boule.recordid && boule.recordid.toString() === selectedRecordId); // Match by record ID

            return matchGender && matchDomain && matchVille && matchNiveau && matchId && matchRecordId;
        });
        setFilteredData(filtered);
    }, [selectedGender, selectedDomain, selectedVille, selectedNiveau, selectedId, selectedRecordId, boulesData]);

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const handleDomainChange = (event) => {
        setSelectedDomain(Array.from(event.target.selectedOptions, option => option.value));
    };

    const handleVilleChange = (event) => {
        setSelectedVille(event.target.value);
    };

    const handleNiveauChange = (event) => {
        setSelectedNiveau(event.target.value);
    };

    const handleIdChange = (event) => {
        setSelectedId(event.target.value);
    };

    const handleRecordIdChange = (event) => {
        setSelectedRecordId(event.target.value);
    };

    const handleShowBoule = () => {
        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);

        if (newClickCount % 10 === 0) {
            const featuredIndex = Math.floor(newClickCount / 10 - 1) % featuredContent.length;
            const featuredId = featuredContent[featuredIndex];
            const featuredItem = boulesData.find(item => item.id === featuredId);
            
            if (featuredItem) {
                setCurrentBoule(featuredItem);
                return;
            }
        }

        if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            const selectedBoule = filteredData[randomIndex];
            setCurrentBoule(selectedBoule);
        }
    };

    const resetFilters = () => {
        setSelectedGender("");
        setSelectedDomain("");
        setSelectedVille("");
        setSelectedNiveau("");
        setSelectedId("");
        setSelectedRecordId("");
    };

    const renderSousDomains = (sousdomaines) => {
        if (!sousdomaines) return null;
        return Array.isArray(sousdomaines) ? sousdomaines.join(", ") : sousdomaines;
    };

    // const handleButtonClick = () => {
    //     setShowDiv(!showDiv);
    //   };

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
        <div style={{ position: "relative", height: "100vh", width: "100%" }}>
            <h3 style={{ color: "#e3fc87" }}>Page profil</h3>
            <div>
                <div style={{ fontWeight: "bold" }}>Filtres:</div>
                <div className="filtrecontainer">
                    {/* <div>
                        <p>Nombre</p>
                        <input 
                            type="text"
                            className="selectvalue"
                            value={selectedId}
                            onChange={handleIdChange}
                            placeholder="Entrer code"
                            style={{ padding: "10px", borderRadius: "5px", maxWidth: "150px", border:"solid" }}
                        />
                    </div> */}
                    <div>
                        <p>Identifiant</p>
                        <input 
                            type="text"
                            value={selectedRecordId}
                            onChange={handleRecordIdChange}
                            placeholder="Entrer votre identifiant"
                            style={{ padding: "10px", borderRadius: "5px", maxWidth: "150px", border:"solid" }}
                        />
                    </div>
                </div>

                {currentBoule && (
                    <div style={{ borderRadius: "8px", margin: "20px 0" }}> 
                        <div style={{ display: "flex", flexDirection: "column", gap: "1px", alignItems: "center" }}>
                            { selectedRecordId && filteredData.length > 0 ? (
                                <button
                                    onClick={handleShowBoule}
                                    style={{ padding: "20px 20px", fontSize: "16px", cursor: "pointer", border: "solid 1px", borderRadius: "50px", margin: "10px" }}
                                >
                                   afficher mon profil
                                </button>
                            ) : (
                                <p> Entrez un identifiant reconnu ❗</p>
                            )}

                            {/* {currentBoule.img && currentBoule.img.map((image, index) => (
                                <img
                                    key={index}
                                    src={`/boulesia/${image}`}
                                    style={{ width: '90%', height: "auto", borderRadius: "5px", maxWidth: "500px" }}
                                    alt={`${currentBoule.name} - image ${index + 1}`}
                                />
                            ))}
                        </div>
                        <div className="infocontainer">
                            <h4 style={{ color:"#1b45a6"}}>{currentBoule.name}</h4>
                            <p>{renderSousDomains(currentBoule.sousdomaine)}</p>
                            <p>{currentBoule.contact}</p>
                            <span>
                                {currentBoule.ville} - {currentBoule.villeprecis}
                            </span>
                            {currentBoule.instagram && (
                                <p>insta 📲{" "}
                                    <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer">
                                        {currentBoule.instaname}
                                    </a>
                                </p>
                            )}
                            {currentBoule.tiktok && (
                                <p>tiktok 📲{" "}
                                    <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer">
                                        {currentBoule.tiktokname}
                                    </a>
                                </p>
                            )}
                            {currentBoule.link && (
                                <p>liens 🔗{" "}
                                    <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
                                        {currentBoule.linkname}
                                    </a>
                                </p>
                            )}
                            {currentBoule.linkree && (
                                <p>link{" "}
                                    <a href={currentBoule.linkree} target="_blank" rel="noopener noreferrer">
                                        {currentBoule.linkreename}
                                    </a>
                                </p>
                            )}
                            {currentBoule.telegram && (
                                <p>telegram ↗️{" "}
                                    <a href={currentBoule.telegram} target="_blank" rel="noopener noreferrer">
                                        {currentBoule.telegramname}
                                    </a>
                                </p>
                            )}
                            {currentBoule.youtube && (
                                <p>Youtube 🔺{" "}
                                    <a href={currentBoule.youtube} target="_blank" rel="noopener noreferrer">
                                        {currentBoule.youtubename}
                                    </a>
                                </p>
                            )}
                            {currentBoule.twitter && (
                                <p>X (twitter) ⚔️{" "}
                                    <a href={currentBoule.twitter} target="_blank" rel="noopener noreferrer">
                                        {currentBoule.twittername}
                                    </a>
                                </p>
                            )}
                            <p style={{ marginTop: "20px", fontStyle: "italic" }}>{currentBoule.message}</p> */}

{currentBoule.img && currentBoule.img.map((image, index) => (
                        <img
                            key={index}
                            src={`/boulesia/${image}`}
                            style={{ width: '90%', height: "auto", borderRadius: "5px", maxWidth: "500px" }}
                            alt={`${currentBoule.name} - image ${index + 1}`}
                        />
                    ))}

                    {/* Profile information */}
                    <div className="profilContainer">
                        {/* <p>{currentBoule.name && currentBoule.name}</p> */}
                        {/* {currentBoule.instagram && (
                            <p>Instagram 📲{" "}
                                <a href={currentBoule.instagram} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.instaname}
                                </a>
                            </p>
                        )} */}

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
                        {/* {currentBoule.tiktok && (
                            <p>TikTok 📲{" "}
                                <a href={currentBoule.tiktok} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.tiktokname}
                                </a>
                            </p>
                        )} */}
                        {/* {currentBoule.link && (
                            <p>Links 🔗{" "}
                                <a href={currentBoule.link} target="_blank" rel="noopener noreferrer">
                                    {currentBoule.linkname}
                                </a>
                            </p>
                        )} */}
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

                        {/* {currentBoule.onlyfan && (
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
                        <p className="messageprofile">{currentBoule.message}</p> */}
                        </div>
                    </div>

     


<button onClick={handleButtonClick}  style={{ padding: "20px 20px", fontSize: "16px", cursor: "pointer", border: "solid 1px", borderRadius: "50px", margin: "10px" }}>
        {showDiv ? 'fermer' : 'Modifier profil ou autre demande'}
      </button>
      {showDiv && 
      <div> 
        {/* <div>peux mettre un peu de temps à charger...</div> */}
        {showLoadingMessage && <div>peux mettre un peu de temps à charger...</div>}
        <iframe class="airtable-embed" src="https://airtable.com/embed/appC6RFWJTUmYg7FU/pagql4a4wuoL3SZY0/form" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe></div>}
    {/* </div> */}



</div>
                )}
                {!currentBoule && filteredData.length > 0 && (
                    <p style={{ marginTop: "150px" }}>Ajoutez votre identifiant et vous pourrez voir votre profil</p>
                )}

                {selectedRecordId && filteredData.length > 0 ? (
                    <button
                        onClick={handleShowBoule}
                        style={{ padding: "20px 20px", fontSize: "16px", cursor: "pointer", border: "solid 1px", borderRadius: "50px", margin: "10px" }}
                    >
                        Afficher profil
                    </button>
                ) : (
                    <p>Entrez un identifiant reconnu ❗</p>
                )}
            </div>
        </div>
    );
}

export default Userprofil;

