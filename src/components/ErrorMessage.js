// // ErrorMessage.js
// import React from "react";
// import styled from "styled-components";

// // Styled component for the error message container
// const ErrorContainer = styled.div`
//   background-color: #f8d7da; /* Light red background */
//   color: #721c24; /* Dark red text */
//   border: 1px solid #f5c6cb; /* Light red border */
//   border-radius: 4px;
//   padding: 10px 15px;
//   margin: 10px 0;
//   font-size: 16px;
// `;

// // Styled component for the close button
// const CloseButton = styled.button`
//   background: transparent;
//   border: none;
//   color: #721c24;
//   font-weight: bold;
//   cursor: pointer;
//   float: right;

//   &:hover {
//     color: #f5c6cb; /* Change color on hover */
//   }
// `;

// const ErrorMessage = ({ message, onClose }) => {
//   return (
//     <ErrorContainer>
//       {message}
//       <CloseButton onClick={onClose}>&times;</CloseButton>
//     </ErrorContainer>
//   );
// };

// export default ErrorMessage;

// components/ErrorMessage.js
import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  color: red;
  background-color: #ffe6e6;
  padding: 10px;
  border: 1px solid red;
  border-radius: 5px;
`;

const ErrorMessage = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default ErrorMessage;
