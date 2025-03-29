import React, { useState, useEffect } from "react";

function FirstConnection() {
    const [currentBoule, setCurrentBoule] = useState(null);
    const [boulesData, setBoulesData] = useState([]);
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("");
    const [selectedVille, setSelectedVille] = useState("");
    const [selectedNiveau, setSelectedNiveau] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [selectedRecordId, setSelectedRecordId] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [clickCount, setClickCount] = useState(0);
    const [showDiv, setShowDiv] = useState(false);
    const [showLoadingMessage, setShowLoadingMessage] = useState(false);

    const featuredContent = [];

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
            const matchId = !selectedId || (boule.id && boule.id.toString() === selectedId);
            const matchRecordId = !selectedRecordId || (boule.recordid && boule.recordid.toString() === selectedRecordId);

            return matchGender && matchDomain && matchVille && matchNiveau && matchId && matchRecordId;
        });
        setFilteredData(filtered);
    }, [selectedGender, selectedDomain, selectedVille, selectedNiveau, selectedId, selectedRecordId, boulesData]);

    const handleGenderChange = (event) => setSelectedGender(event.target.value);
    const handleDomainChange = (event) => setSelectedDomain(Array.from(event.target.selectedOptions, option => option.value));
    const handleVilleChange = (event) => setSelectedVille(event.target.value);
    const handleNiveauChange = (event) => setSelectedNiveau(event.target.value);
    const handleIdChange = (event) => setSelectedId(event.target.value);
    const handleRecordIdChange = (event) => setSelectedRecordId(event.target.value);

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

    const handleButtonClick = () => {
        setShowDiv(!showDiv);
        if (!showDiv) {
            setShowLoadingMessage(true);
            setTimeout(() => setShowLoadingMessage(false), 5000);
        }
    };

    return (
        <div style={{ position: "relative", height: "100vh", width: "100%"}}>
            <div>
                <div className="filtrecontainer">
                    <div>
                        <input 
                            type="text"
                            value={selectedRecordId}
                            onChange={handleRecordIdChange}
                            placeholder="Profile code"
                            style={{ padding: "10px", borderRadius: "5px", maxWidth: "150px", border:"solid 2px #E3FC87" }}
                        />
                    </div>
                </div>
                {!currentBoule && filteredData.length > 0 && (
                    <p style={{ marginTop: "150px" }}></p>
                )}

                {selectedRecordId && (
                    boulesData.some(boule => boule.recordid === selectedRecordId) ? (
                        <button 
                            className="candidaturbuttonUserProfil"
                            onClick={handleShowBoule}
                        >
                            display profile
                        </button>
                    ) : (
                        <p style={{ marginTop: "150px", color: "#e3fc87", fontSize: "20px" }}>
                            Wait 24h to activate your profile
                        </p>
                    )
                )}

                {currentBoule && (
                    <div style={{ borderRadius: "8px", margin: "0px 0"}}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1px", alignItems: "center"}}>
                            {currentBoule.img && currentBoule.img.map((image, index) => (
                                <img
                                    key={index}
                                    src={`/boulesia/${image}`}
                                    style={{ width: '90%', height: "auto", borderRadius: "16px", maxWidth: "500px" }}
                                    alt={`${currentBoule.name} - image ${index + 1}`}
                                />
                            ))}
                            <div className="profilContainer_user">
                                <p className="ProfilName">{currentBoule.name && currentBoule.name}</p>
                                <div className="divbuttonlinkprofil">
                                    <p className="messageprofile">{currentBoule.message}</p>
                                </div>

                                {currentBoule.instagram && (
                                    <button className="buttonlinkprofil">
                                        <div className="divbuttonlinkprofil">
                                            <div className="divbuttonimagelinkprofilimg">
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


                        {currentBoule.fansly && (
                       
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


                            </div>
                            <div className="user_modification_formulaire">
                                <button 
                                    onClick={handleButtonClick}
                                    className="user_modification_formulaire_button"
                                >
                                    {showDiv ? 'Close' : 'Modify profile or other request'}
                                </button>
                                {showDiv && 
                                    <div>
                                        {showLoadingMessage && <div>Loading...</div>}
                                        <iframe 
                                            className="airtable-embed" 
                                            src="https://airtable.com/embed/appguH9iycb2f1On8/pagL6bKTIzlZZLO7U/form" 
                                            frameBorder="0" 
                                            onMouseWheel="" 
                                            width="100%" 
                                            height="533" 
                                            style={{background: "transparent", border: "1px solid #ccc"}}
                                        ></iframe>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FirstConnection;