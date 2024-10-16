// src/pages/index.js

import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

// Create a styled component for the container
const Container = styled.div`
  text-align: center; // Center the content horizontally
  padding: 20px;
`;

const WelcomeText = styled.h1`
  font-size: 3rem; // Adjust font size as needed
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem; // Adjust font size as needed
  // border: 2px solid #ccc; // Add a border
  padding: 1rem;
  border-radius: 5px;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <WelcomeText>Welcome to CookSmart</WelcomeText>
        <Description>
          CookSmart is a user-friendly app crafted to help you explore
          ingredients, discover perfect flavor combinations, and contribute your
          own ingredient ideas. Dive into ingredient data, learn about
          complementary flavors, and get personalized recommendations for
          creating the best ingredient pairings.
        </Description>
      </Container>
    </div>
  );
};

export default Home;
