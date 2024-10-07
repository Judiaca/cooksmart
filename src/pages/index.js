// import React, { useState, useEffect } from "react";
// import styled from "styled-components"; // Check if styled-components is installed
// import Navbar from "../components/Navbar"; // Ensure this component is exported correctly
// import LoadingSpinner from "../components/LoadingSpinner"; // Ensure this component is exported correctly

// const HomePageWrapper = styled.div`
//   padding: 20px;
// `;

// const Home = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate some data loading
//     setTimeout(() => setLoading(false), 2000);
//   }, []);

//   return (
//     <HomePageWrapper>
//       <Navbar />
//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           <h1>Welcome to CookSmart</h1>
//           <p>Your go-to place for pairing ingredients!</p>
//         </>
//       )}
//     </HomePageWrapper>
//   );
// };

// export default Home;
// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to CookSmart</h1>
      {/* Home page content goes here */}
    </div>
  );
};

export default Home;
