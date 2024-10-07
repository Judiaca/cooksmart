// const IngredientCard = ({ _id, name, description, flavors, image }) => {
//   const handleDelete = async () => {
//     const confirmDelete = confirm(`Are you sure you want to delete ${name}?`);
//     if (confirmDelete) {
//       const response = await fetch(`/api/ingredients?id=${_id}`, {
//         method: "DELETE",
//       });
//       if (response.ok) {
//         // Optionally, refresh the list or navigate
//         console.log("Ingredient deleted successfully");
//       } else {
//         console.error("Failed to delete ingredient");
//       }
//     }
//   };

//   return (
//     <div className="ingredient-card">
//       <h2>{name}</h2>
//       <p>{description}</p>
//       <p>Flavors: {flavors.join(", ")}</p>
//       <img src={image} alt={name} />
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// components/IngredientCard.js
import React from "react";

const IngredientCard = ({ ingredient }) => {
  return (
    <div>
      <h2>{ingredient.name}</h2>
      <p>{ingredient.description}</p>
    </div>
  );
};

export default IngredientCard;
