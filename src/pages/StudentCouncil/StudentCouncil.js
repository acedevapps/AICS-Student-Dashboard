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
                            className="fadable1"
                            src={AicsLogo}
                            style={{ maxHeight: "30vh", maxWidth: "80vw", padding: "2vh 0", margin: 0, border: "1vh solid", borderColor: "white", borderRadius: "3vw", backgroundColor: "#F8F0E3" }}
                            alt="-AICS-"
                        />
                        <div className="fadable2" style={{fontSize: "8vw", marginTop: "3vh", fontFamily: "Poppins", fontWeight: 600 }}>Student Council</div>
                    </div>
                </div>
            </div>

            <div className="page" style={{ backgroundColor: "#941A1C" }}>
                <div className="left" style={{ position: "absolute", top: "50%", left: "2vw", msTransform: "translateY(-50%)", transform: "translateY(-50%)", textAlign: "center", width: "46vw" }}>
                    <h1>Who We Are</h1>
                    <p>placeholder placeholder placeholder</p>
                </div>
                <iframe width="50%" height="80%" src="https://www.youtube.com/embed/o5Ov7gsOr6w" title="Student Council Trailer" allowFullScreen="allowfullscreen" style={{ position: "absolute", top: "50%", right: "2%", msTransform: "translateY(-50%)", transform: "translateY(-50%)" }} / >
            </div>

            <svg className="connector" width="500" height="500">
                <line x1="10" y1="10" x2="100" y2="100" style={{ stroke: "white", strokeWidth: "10" }} />
            </svg>

            <div className="page" style={{ backgroundColor: "#DF1E26" }}>
                <div className="right" style={{ position: "absolute", top: "50%", right: "5%", msTransform: "translateY(-50%)", transform: "translateY(-50%)", textAlign: "center", width: "46%" }}>
                    <h1>Mission</h1>
                    <p>placeholder placeholder placeholder</p>
                </div>
                <div className="left" style={{ position: "absolute", top: "50%", left: "5%", msTransform: "translateY(-50%)", transform: "translateY(-50%)", textAlign: "center", width: "46%" }}>
                    <h1>Workflow</h1>
                    <p>placeholder placeholder placeholder</p>
                </div>
            </div>

            <div className="page" style={{ backgroundColor: "#F37220" }}>
                <div className="center">
                    <h1>Meet The Team</h1>
                    <p>placeholder placeholder placeholder</p>
                </div>
            </div>

            <div className="page" style={{ backgroundColor: "#FBA31A" }}>
                <div className="center">
                    <h1>OUR CORE VALUES</h1>
                    <p>WE, the Student Council, aim to act as representatives and role models of our open minded and diverse community, in order to foster a safe, enjoyable and effective learning environment. Through taking ownership and initiative, we grow as individuals and develop tools and skills to progress towards a better future. 
                    <br/><br/>“Education is a fundamental human right.”
                    <br/>-UNESCO</p>
                </div>
            </div>

            <div className="page" style={{ backgroundColor: "#e8bb35" }}>
                <div className="center" style={{width:"auto"}}>
                    <h1 style={{ marginTop: 0 }}>GET IN TOUCH</h1>
                    <form>
                        <label>Title </label>
                        <input type="text" name="title" style={{ height: "5vh" }} />
                        <br/>
                        <label>Message </label>
                        <textarea name="message" style={{ height: "20vh" }} />
                        <br/>
                        <input type="submit" value="Submit" style={{ height: "5vh", maxWidth: "80vw" }} />
                    </form>
                </div>
            </div>

        </div>
    );
}

export default StudentCouncil;