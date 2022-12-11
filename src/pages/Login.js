import React, { useState, useRef } from "react";
import { useScript } from "../hooks/useScript";
import jwt_deocde from "jwt-decode";

const Login = () => {
    const googlebuttonref = useRef();
    const [user, setuser] = useState(false);

    const generateToken = () => {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var result = "";
        for (var i = 30; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };

    const onGoogleSignIn = async (user) => {
        let userCred = user.credential;
        let payload = jwt_deocde(userCred);
        setuser(payload);
        const parts = payload.email.split("@")

        console.log(parts[1])

        if (parts[1] === "aics.espritscholen.nl") {
            localStorage.setItem("login", JSON.stringify("yeeee"));
            localStorage.setItem("user", parts[0]);
            
            fetch('http://localhost:8080/users/'+parts[0])
                .then(response => {
                    if (response.status === 404) {
                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({id: "0", name: payload.name, mail: parts[0], cred: userCred, token: generateToken(), link: payload.picture})
                            
                        }; // http://localhost:8080/users
                        fetch('http://localhost:8080/users', requestOptions)
                            .then(async response => {
                                const isJson = response.headers.get('content-type')?.includes('application/json');
                                const data = isJson && await response.json();
                                
                                if (!response.ok) {
                                    const error = (data && data.message) || response.status;
                                    return Promise.reject(error);
                                }
                    
                                this.setState({ postId: data.id })
                                console.log(await response.json())
                            })
                            .catch(error => {
                                this.setState({ errorMessage: error.toString() });
                                console.error('There was an error!', error);
                            });
                    } else {

                    }
                })
                .then(data => this.setState({ totalReactPackages: data.total }));

        } else {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }
    };

    useScript("https://accounts.google.com/gsi/client", async () => {
        window.google.accounts.id.initialize({
            client_id: "737022714395-0pak0322c66jcb4amf5br4k7tg8mkmnr.apps.googleusercontent.com",
            callback: await onGoogleSignIn,
            auto_select: false,
        });

        window.google.accounts.id.renderButton(googlebuttonref.current, {
            size: "medium",
        });
    });
    
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