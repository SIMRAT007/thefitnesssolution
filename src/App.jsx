import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/AboutUs";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default App;
