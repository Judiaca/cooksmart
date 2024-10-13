import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to CookSmart</h1>
      <p>Your go-to place for pairing ingredients!</p>
      {/* Home page content goes here */}
    </div>
  );
};

export default Home;
