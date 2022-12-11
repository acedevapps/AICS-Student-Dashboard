import React from "react";
import "./StudentCouncil.css";
import AicsLogo from "./AicsLogo.png";
import GroupPhoto from "./GroupPhoto.jpg";

const StudentCouncil = () => {
    return (
        <div className="StudentCouncilPage">

            <div className="page" style={{ height: "95vh", marginTop: "0vh" }}>
                <img src={GroupPhoto} className="GroupPhoto" alt="~"></img>

                <div className="center" style={{ marign: 0, position: "absolute", top: "50%", left: "50%", msTransform: "translate(-50%, -50%)", transform: "translate(-50%, -50%)" }}>
                    <div className="title">
                        <img
                            src={AicsLogo}
                            style={{ maxHeight: "30vh", maxWidth: "80vw", padding: "2vh", margin: 0, border: "1vh solid", borderColor: "white", borderRadius: "3vw", backgroundColor: "#F8F0E3" }}
                            alt="-AICS-"
                        / >
                        <div style={{fontSize: "100px", fontFamily: "italianno", fontWeight: "bolder" }}>Student Council</div>
                        <div style={{fontSize: "100px", fontFamily: "diplomata sc"}}>22/23</div>
                    </div>
                </div>
            </div>

            <div className="page" style={{ height: "80vh", backgroundColor: "#941A1C" }}>
                <div className="left" style={{ position: "absolute", top: "50%", left: "2%", msTransform: "translateY(-50%)", transform: "translateY(-50%)", textAlign: "center", width: "46%" }}>
                    <h1>Who We Are</h1>
                    <p>placeholder placeholder placeholder</p>
                </div>
                <iframe width="50%" height="80%" src="https://www.youtube.com/embed/o5Ov7gsOr6w" title="Student Council Trailer" frameborder="0" allowfullscreen="allowfullscreen" style={{ position: "absolute", top: "50%", right: "2%", msTransform: "translateY(-50%)", transform: "translateY(-50%)" }} / >
            </div>

            <div className="page" style={{ height: "70vh", backgroundColor: "#DF1E26" }}>
                <div className="right" style={{ position: "absolute", top: "50%", right: "5%", msTransform: "translateY(-50%)", transform: "translateY(-50%)", textAlign: "center", width: "46%" }}>
                    <h1>Mission</h1>
                    <p>placeholder placeholder placeholder</p>
                </div>
                <div className="left" style={{ position: "absolute", top: "50%", left: "5%", msTransform: "translateY(-50%)", transform: "translateY(-50%)", textAlign: "center", width: "46%" }}>
                    <h1>Workflow</h1>
                    <p>placeholder placeholder placeholder</p>
                </div>
            </div>

            <div className="page" style={{ height: "60vh", backgroundColor: "#F37220" }}>
                <div className="center">
                    <h1 style={{ fontFamily: "" }}>Meet The Team</h1>
                    <p>placeholder placeholder placeholder</p>
                </div>
            </div>

            <div className="page" style={{ height: "50vh", backgroundColor: "#FBA31A" }}>
                <div className="center">
                    <h1 style={{ fontFamily: "diplomata sc" }}>OUR CORE VALUES</h1>
                    <p>WE, the Student Council, aim to act as representatives and role models of our open minded and diverse community, in order to foster a safe, enjoyable and effective learning environment. Through taking ownership and initiative, we grow as individuals and develop tools and skills to progress towards a better future. 
                    <br/><br/>“Education is a fundamental human right.”
                    <br/>-UNESCO
                    </p>
                </div>
            </div>

        </div>
    );
    }

export default StudentCouncil;