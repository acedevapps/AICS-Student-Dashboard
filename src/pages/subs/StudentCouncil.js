import React from "react";
import "./StudentCouncil.css";
import AicsLogo from "./AicsLogo.png";
import GroupPhoto from "./GroupPhoto.jpg";

const StudentCouncil = () => {
    return (
        <div className="StudentCouncilPage">

            <div className="page" style={{ height: "85vh", marginTop: "0vh" }}>
                <img src={GroupPhoto} className="GroupPhoto" alt="~"></img>

                <div className="center" style={{ marign: 0, position: "absolute", top: "50%", left: "50%", msTransform: "translate(-50%, -50%)", transform: "translate(-50%, -50%)" }}>
                    <div className="title">
                        <img
                            src={AicsLogo}
                            style={{ maxHeight: "30vh", maxWidth: "80vw", padding: "2vh", margin: 0, border: "1vh solid", borderColor: "white", borderRadius: "3vw", backgroundColor: "#F8F0E3" }}
                            alt="-AICS-"
                        ></img>
                        <div style={{fontSize: "100px", fontFamily: "italianno", fontWeight: "bolder" }}>Student Council</div>
                        <div style={{fontSize: "100px", fontFamily: "diplomata sc"}}>22/23</div>
                    </div>
                </div>
            </div>

            <div className="page" style={{ height: "80vh", backgroundColor: "#941A1C" }}>
                <div className="meet us">Meet Us</div>
            </div>

        </div>
    );
    }

export default StudentCouncil;