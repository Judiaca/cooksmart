import React, { useState, useEffect } from "react";

const PairingForm = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [reason, setReason] = useState("");

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch("/api/ingredients");
        const data = await response.json();
        setIngredients(data.ingredients);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    fetchIngredients();
  }, []);

  const handleIngredientChange = (event) => {
    const ingredientId = event.target.value;
    if (event.target.checked) {
      setSelectedIngredients([...selectedIngredients, ingredientId]);
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((id) => id !== ingredientId)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ingredients: selectedIngredients, reason });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Select Ingredients:</h3>
      {ingredients.map((ingredient) => (
        <div key={ingredient._id}>
          <input
            type="checkbox"
            id={ingredient._id}
            name="ingredients"
            value={ingredient._id}
            onChange={handleIngredientChange}
          />
          <label htmlFor={ingredient._id}>{ingredient.name}</label>
        </div>
      ))}

      <h3>Reason:</h3>
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default PairingForm;

// import React, { useState } from "react";

// const PairingForm = ({ onSubmit }) => {
//   const [ingredient1, setIngredient1] = useState("");
//   const [ingredient2, setIngredient2] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ ingredient1, ingredient2, description });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Ingredient 1:</label>
//         <input
//           type="text"
//           value={ingredient1}
//           onChange={(e) => setIngredient1(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Ingredient 2:</label>
//         <input
//           type="text"
//           value={ingredient2}
//           onChange={(e) => setIngredient2(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default PairingForm;
