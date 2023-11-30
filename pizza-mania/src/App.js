import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Types from "./components/Types";
import Item from "./components/Item";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Item />
      <Types />
      <Footer />
    </div>
  );
};

export default App;
