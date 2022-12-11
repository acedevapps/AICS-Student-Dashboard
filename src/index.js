import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Topbar from './components/Topbar';
import Home from './pages/Homepage/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import StudentCouncil from './pages/subs/StudentCouncil';

const router = createBrowserRouter([
  {
    path: '/AICS-Student-Dashboard/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/AICS-Student-Dashboard/login',
    element: <Login />,
  },
  {
    path: '/AICS-Student-Dashboard/student-council',
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
