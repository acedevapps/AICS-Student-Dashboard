import React from "react";
import './allStyle.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <a href="/">Home</a>
            <a href="/student-council">Student Council</a>
            <a href="/updates">Updates</a>
            <a href="https://aics.students.isams.cloud/api/homepage/">Isams</a>
            <a href="https://aics.managebac.com/student">Managebac</a>
            <a href="/clubs">Clubs</a>
            <a href="/login">Login</a>
        </div>
    );
    }

export default Topbar;