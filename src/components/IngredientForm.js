// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// const IngredientForm = ({ existingIngredient = null }) => {
//   const [formData, setFormData] = useState({
//     name: existingIngredient ? existingIngredient.name : "",
//     description: existingIngredient ? existingIngredient.description : "",
//     image: existingIngredient ? existingIngredient.image : "",
//     flavors: existingIngredient ? existingIngredient.flavors.join(", ") : "",
//   });

//   const router = useRouter();
//   const isEditing = !!existingIngredient;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const method = isEditing ? "PUT" : "POST";
//     const url = isEditing
//       ? `/api/ingredients?id=${existingIngredient._id}`
//       : "/api/ingredients";

//     const response = await fetch(url, {
//       method: method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: formData.name,
//         description: formData.description,
//         image: formData.image,
//         flavors: formData.flavors.split(",").map((f) => f.trim()),
//       }),
//     });

//     if (response.ok) {
//       router.push("/ingredients");
//     } else {
//       console.error("Failed to save ingredient");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={formData.description}
//         onChange={(e) =>
//           setFormData({ ...formData, description: e.target.value })
//         }
//       />
//       <input
//         type="text"
//         placeholder="Image URL"
//         value={formData.image}
//         onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Flavors (comma-separated)"
//         value={formData.flavors}
//         onChange={(e) => setFormData({ ...formData, flavors: e.target.value })}
//       />
//       <button type="submit">
//         {isEditing ? "Update Ingredient" : "Add Ingredient"}
//       </button>
//     </form>
//   );
// };

// export default IngredientForm;

// components/IngredientForm.js
import React, { useState } from "react";

const IngredientForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default IngredientForm;
