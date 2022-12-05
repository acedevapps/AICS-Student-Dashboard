import React, { useState, useRef } from "react";
import { useScript } from "../hooks/useScript";
import jwt_deocde from "jwt-decode";

const Login = () => {
    const googlebuttonref = useRef();
    const [user, setuser] = useState(false);
    const onGoogleSignIn = (user) => {
        let userCred = user.credential;
        let payload = jwt_deocde(userCred);
        console.log(payload);
        setuser(payload);
    };
    useScript("https://accounts.google.com/gsi/client", () => {
        window.google.accounts.id.initialize({
            client_id: "737022714395-0pak0322c66jcb4amf5br4k7tg8mkmnr.apps.googleusercontent.com",
            callback: onGoogleSignIn,
            auto_select: false,
        });

        window.google.accounts.id.renderButton(googlebuttonref.current, {
            size: "medium",
        });
    });
    console.log(user);
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            {!user && <div ref={googlebuttonref}></div>}
            {user && (
                <div>
                    <h1>{user.name}</h1>
                    <img src={user.picture} alt="profile" />
                    <p>{user.email}</p>
                    <button onClick={() => { setuser(false); }}>Logout</button>
                </div>
            )}
        </div>
    );
    }

export default Login;