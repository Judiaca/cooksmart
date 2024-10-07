// pages/ingredients/new.js
import React, { useState } from "react";
import IngredientForm from "../../components/IngredientForm";
import ErrorMessage from "../../components/ErrorMessage";

const NewIngredient = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (ingredient) => {
    try {
      const response = await fetch("/api/ingredients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ingredient),
      });

      if (!response.ok) throw new Error("Failed to add ingredient");
      // Optionally, you can redirect or show success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Add New Ingredient</h1>
      {error && <ErrorMessage message={error} />}
      <IngredientForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewIngredient;
