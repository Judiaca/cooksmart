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

  if (!ingredients) return <p>Loading ingredients...</p>;

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
