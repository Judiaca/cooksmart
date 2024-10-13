import React, { useState } from "react";
import IngredientForm from "../../components/IngredientForm";
import ErrorMessage from "../../components/ErrorMessage";
import Layout from "@/components/Layout";

const NewIngredient = () => {
  const [error, setError] = useState(null);
  const [addedIngredient, setAddedIngredient] = useState(null); // State to store the newly added ingredient

  const handleSubmit = async (ingredient) => {
    try {
      // Validate that ingredient includes all necessary fields
      if (!ingredient.name) {
        throw new Error("Name are required");
      }

      const response = await fetch("/api/ingredients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ingredient),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Failed to add ingredient";
        throw new Error(errorMessage);
      }

      // Optionally, you can redirect or show success message
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFormReset = () => {
    setAddedIngredient(null); // Clear the added ingredient when the form is reset
  };

  return (
    <Layout>
      <div>
        <h1>Add New Ingredient</h1>
        {error && <ErrorMessage message={error} />}
        <IngredientForm
          onSubmit={handleSubmit}
          onReset={handleFormReset}
        />{" "}
        {/* Pass onReset to IngredientForm */}
        {addedIngredient && ( // Conditionally render the added ingredient
          <div>
            <h3>Newly Added Ingredient:</h3>
            <p>Name: {addedIngredient.name}</p>
            <p>Description: {addedIngredient.description}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NewIngredient;
