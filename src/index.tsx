import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import About from "./pages/About";
// import Error from "./pages/Error";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
// ]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>


  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
