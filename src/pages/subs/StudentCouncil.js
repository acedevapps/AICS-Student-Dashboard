import React from "react";
import "./StudentCouncil.css";
import AicsLogo from "./AicsLogo.png";
import GroupPhoto from "./GroupPhoto.jpg";

const StudentCouncil = () => {
    return (
        <div className="StudentCouncilPage">

            <img
                src={GroupPhoto}
                style={{
                    width: "100%", "z-index": "-1", position: "absolute", top: "0", left: "0",
                    filter: "blur(5px) brightness(0.5)", height: "100vh"
                }}
                alt="~">
            </img>

            <div className="page" style={{height: "100vh"}}>
                <div className="center" style={{
                    display: "flex", flexDirection: "column",
                }}>
                    <div className="title">
                        <img 
                            src={AicsLogo}
                            style={ {maxHeight: "30vh", maxWidth: "80vw", padding: "2vh", margin: "3vh", border: "1vh solid", borderColor: "white"} }
                            alt="-AICS-"
                        ></img>
                        <div style={{fontSize: "20vh"}}>Student Council</div>
                        2022-2023
                    </div>
                </div>
            </div>

        </div>
    );
    }

export default StudentCouncil;