// import React, { useState } from "react";
// import styled from "styled-components";

// const FormWrapper = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 20px 0;
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   background-color: blue;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: darkblue;
//   }
// `;

// const PairingForm = ({ onSubmit }) => {
//   const [ingredient, setIngredient] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(ingredient); // Call the parent function to handle the ingredient
//     setIngredient(""); // Clear the input field
//   };

//   return (
//     <FormWrapper onSubmit={handleSubmit}>
//       <Input
//         type="text"
//         placeholder="Enter an ingredient"
//         value={ingredient}
//         onChange={(e) => setIngredient(e.target.value)}
//         required
//       />
//       <Button type="submit">Find Pairings</Button>
//     </FormWrapper>
//   );
// };

// export default PairingForm;

// components/PairingForm.js
import React, { useState } from "react";

const PairingForm = ({ onSubmit }) => {
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ingredient1, ingredient2, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ingredient 1:</label>
        <input
          type="text"
          value={ingredient1}
          onChange={(e) => setIngredient1(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ingredient 2:</label>
        <input
          type="text"
          value={ingredient2}
          onChange={(e) => setIngredient2(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PairingForm;
