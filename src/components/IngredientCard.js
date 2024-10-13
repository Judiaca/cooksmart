import React from "react";

const IngredientCard = ({ ingredient, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/ingredients?id=${ingredient._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete ingredient");
      }
      // Call the onDelete function passed from the parent component
      onDelete(ingredient._id);

      console.log("Ingredient deleted successfully");
    } catch (error) {
      console.error("Error deleting ingredient:", error);
    }
  };

  return (
    <div>
      <h2>{ingredient.name}</h2>
      <p>{ingredient.description}</p>
      {ingredient.flavor && ( // Check if the ingredient has flavors
        <div>
          <h3>Flavors:</h3>
          <ul>
            {ingredient.flavor.map((flavor, index) => (
              <li key={index}>{flavor}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default IngredientCard;
