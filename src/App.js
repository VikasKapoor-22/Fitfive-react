import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Health from "./Component/Health";
import Why from "./Component/Why";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Health />
      <Why />
      <Footer />
    </>
  );
};

export default App;
