import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import SearchRecipes from "./pages/SearchRecipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<SearchRecipes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
