import React from "react";
import "./App.css";
import Projects from "./components/CardComp";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";
import Hero from "./components/Hero";


const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Carousel />
      <ChatBot />
    </div>
  );
};
export default App;
