import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Topbar from './components/Topbar';
import Home from './pages/Home/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import StudentCouncil from './pages/StudentCouncil/StudentCouncil';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  if (localStorage.getItem("login") === null) {
    if (window.location.href !== "http://localhost:3000/login") {
    window.location.href = "/login";}
  } else {
    const token = localStorage.getItem("login")
    const user = localStorage.getItem("user")

    fetch('http://localhost:8080/users/'+user).then(response => response.json()).then(response => {
        console.log(response.message)
        if (response.message === "user not found") {
          if (window.location.href !== "http://localhost:3000/login") {
            window.location.href = "/login";}
        } else {
          //window.location.href = "/login";
          if (response.token !== token) {
            if (window.location.href !== "http://localhost:3000/login") {
                window.location.href = "/login";
            }
        } else {
            if (window.location.href === "http://localhost:3000/login") {
                window.location.href = "http://localhost:3000/";
            }
        }
        }
    })
  }


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/student-council',
    element: <StudentCouncil />,
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// To send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
