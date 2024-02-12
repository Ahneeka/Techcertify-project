import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Center from "./components/Center/Center";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Center />
    </BrowserRouter>
  );
}

export default App;
