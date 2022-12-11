import React from "react";
import './allStyle.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/error">Error</a>
            <a href="/student-council">Student Council</a>
        </div>
    );
    }

export default Topbar;