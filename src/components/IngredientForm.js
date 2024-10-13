import React, { useState } from "react";

const IngredientForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [flavor, setFlavor] = useState("");
  // const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, flavor: flavorArray });
    // onSubmit({ name, description, flavor, quantity });

    setName(""); // Clear the name field
    setDescription(""); // Clear the description field
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="flavor">Flavor:</label>
        <input
          type="text"
          id="flavor"
          name="flavor"
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
        />
      </div>
      {/* <div>
        <label htmlFor="quantity">Quantity:</label>

        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div> */}
      <button type="submit">Submit</button>
      {/* <button type="reset" onClick={handleReset}>
        Reset
      </button>{" "} */}
    </form>
  );
};

export default IngredientForm;
