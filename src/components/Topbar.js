import React from "react";
import './allStyle.css';

const Topbar = () => {
    return (
        <div>
            <ul className="topbar">
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/student-council">Student Council</a>
            </ul>
        </div>
    );
    }

export default Topbar;