import React, { useState, useEffect } from "react";
// import Flavor from "@/models/Flavor";

const IngredientForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [availableFlavors, setAvailableFlavors] = useState([]);
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [newFlavor, setNewFlavor] = useState("");

  useEffect(() => {
    const fetchFlavors = async () => {
      try {
        const response = await fetch("/api/flavors");
        // Highlight: Check if the response is ok
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Flavors from API:", data.flavors);
        setAvailableFlavors(data.flavors);
      } catch (error) {
        console.error("Error fetching flavors:", error);
        // Consider setting an error state or showing a message to the user
      }
    };
    fetchFlavors();
  }, []);

  const handleFlavorChange = (event) => {
    setSelectedFlavors(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
  };

  const handleNewFlavorChange = (event) => {
    setNewFlavor(event.target.value);
  };

  const handleAddFlavor = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/flavors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newFlavor }),
      });

      if (response.ok) {
        const newFlavorData = await response.json();
        setAvailableFlavors([...availableFlavors, newFlavorData]);
        setNewFlavor(""); // Clear the input field
      } else {
        console.error("Failed to add flavor");
      }
    } catch (error) {
      console.error("Error adding flavor:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, flavor: selectedFlavors });
    // onSubmit({ name, description, flavor, quantity });

    setName(""); // Clear the name field
    setDescription(""); // Clear the description field
  };

  // const handleFlavorChange = (e) => {
  //   setFlavor(e.target.value);
  //   setFlavorArray(e.target.value.split(","));
  // };

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
        <label htmlFor="flavor">Flavors:</label>
        <select
          id="flavor"
          name="flavor"
          multiple
          value={selectedFlavors}
          onChange={handleFlavorChange}
        >
          {/* Render options from availableFlavors */}
          {availableFlavors.map((flavor) => (
            <option key={flavor._id} value={flavor._id}>
              {flavor.name}
            </option>
          ))}
        </select>
      </div>

      {/* Add new flavor input and button */}
      <div>
        <label htmlFor="newFlavor">Add New Flavor:</label>
        <input
          type="text"
          id="newFlavor"
          name="newFlavor"
          value={newFlavor}
          onChange={handleNewFlavorChange}
        />
        <button onClick={handleAddFlavor}>Add Flavor</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IngredientForm;
