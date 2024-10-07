// import React from "react";
// import styled, { keyframes } from "styled-components";

// // Define the spin animation using keyframes from styled-components
// const spin = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

// // Spinner container to center the spinner
// const SpinnerContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// // Styled component for the actual spinner
// const Spinner = styled.div`
//   border: 4px solid rgba(0, 0, 0, 0.1); /* Light border for background */
//   border-top: 4px solid #3498db; /* Spinner color */
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   animation: ${spin} 1s linear infinite; /* Applying the spin animation */
// `;

// const LoadingSpinner = () => {
//   return (
//     <SpinnerContainer>
//       <Spinner />
//     </SpinnerContainer>
//   );
// };

// export default LoadingSpinner;

// components/LoadingSpinner.js
import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;
