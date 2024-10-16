import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #5682ab;
  }

  h1, h2 {
    color: #333;
  }

  @media (max-width: 768px) { /* Adjust the breakpoint as needed */
  .card {
    width: 100%; /* Make ingredient/pairing cards full width on smaller screens */
  }

  nav ul {
    flex-direction: column; /* Stack navbar items vertically */
    align-items: center; 
  }

  nav ul li a.active {
  font-weight: bold;
  color: yellow;
}


`;

export default GlobalStyles;
