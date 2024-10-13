import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  color: red;
  background-color: #ffe6e6;
  padding: 10px;
  border: 1px solid red;
  border-radius: 5px;
`;

const ErrorMessage = ({ message }) => (
  <div style={{ color: "red" }}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
