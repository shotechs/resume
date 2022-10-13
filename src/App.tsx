import * as React from "react";
import { Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
const About = React.lazy(() => import("./pages/About"));
const Error = React.lazy(() => import("./pages/Error"));
export default function App() {
  const title = "Rachon Resume";

  return (
    <>
      <Header title={title} />
      <Routes>
      <Route path="/resume" >
        <Route index element={<Home/>} />
        <Route path="about" element={
        <React.Suspense fallback={<>...</>}>
           <About />
        </React.Suspense>
       } />
        <Route path="*" element={
             <React.Suspense fallback={<>...</>}>
             <Error />
          </React.Suspense>
        } />
        </Route>
      </Routes>
    </>
  );
}
