import React, { useState, useRef } from "react";
import { useScript } from "../hooks/useScript";
import jwt_deocde from "jwt-decode";

const Login = () => {
    
    if (localStorage.getItem("login") !== null) {
    const token = localStorage.getItem("login")
    const user = localStorage.getItem("user")

    fetch('http://localhost:8080/users/'+user).then(response => response.json()).then(response => {
        console.log(response.message)
        if (response.message !== "user not found") {
          
            if (response.token === token) {
                return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                {!user && <div ref={googlebuttonref}></div>}
                {user && (
                    <div>
                        <h1>{localStorage.getItem("name")}</h1>
                        <img src={localStorage.getItem("picture")} alt="profile" />
                        <p>{localStorage.getItem("user")}</p>
                        <button onClick={() => { setuser(false); }}>Logout</button>
                    </div>
                )}
            </div>
        );
            }
        
        }
    })
  }
    
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
            const token = generateToken();
            localStorage.setItem("login", token);
            localStorage.setItem("user", parts[0]);
            localStorage.setItem("name", payload.name);
            localStorage.setItem("picture", payload.picture);
            
            fetch('http://localhost:8080/users/'+parts[0])
                .then(response => {
                    if (response.status === 404) {
                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({id: "0", name: payload.name, mail: parts[0], cred: userCred, token: token, link: payload.picture}),
                            mode: 'no-cors'
                            
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
                        fetch('http://localhost:8080/users/'+parts[0]+'/'+token)
                        .then(response => {
                            if (response.json().message === "user token replaced") {
                                console.log("token updated")
                            } else {
                                console.log("token not updated")
                            }
                        })
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