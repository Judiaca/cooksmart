import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); // Add a subtle shadow
  width: 250px; // Adjust this value as needed

  h2 {
    margin-top: 0; // Remove default top margin
  }
  p {
    word-break: break-word; // Allow long words to break
    overflow-wrap: break-word; // Alternative for older browsers
  }
`;

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
    <Card>
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
    </Card>
  );
};

export default IngredientCard;
