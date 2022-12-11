import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Topbar from './components/Topbar';
import Home from './pages/Home/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import StudentCouncil from './pages/StudentCouncil/StudentCouncil';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
