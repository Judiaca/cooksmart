// src/pages/flavors/index.js

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import styled from "styled-components";

const FlavorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FlavorCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width: 200px; /* Adjust as needed */
  text-align: center;
`;

const FlavorsPage = () => {
  const [flavors, setFlavors] = useState([]);
  const [newFlavor, setNewFlavor] = useState("");

  useEffect(() => {
    const fetchFlavors = async () => {
      try {
        const response = await fetch("/api/flavors");
        const data = await response.json();
        setFlavors(data.flavors);
      } catch (error) {
        console.error("Error fetching flavors:", error);
      }
    };

    fetchFlavors();
  }, []);

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
        setFlavors([...flavors, newFlavorData]);
        setNewFlavor("");
      } else {
        console.error("Failed to add flavor");
      }
    } catch (error) {
      console.error("Error adding flavor:", error);
    }
  };

  const handleDeleteFlavor = async (flavorId) => {
    try {
      const response = await fetch(`/api/flavors?id=${flavorId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the flavors state to remove the deleted flavor
        setFlavors(flavors.filter((flavor) => flavor._id !== flavorId));
      } else {
        console.error("Failed to delete flavor");
        // Consider showing an error message to the user
      }
    } catch (error) {
      console.error("Error deleting flavor:", error);
      // Consider showing an error message to the user
    }
  };

  return (
    <Layout>
      <div>
        <h1>Flavors</h1>

        <FlavorsContainer>
          {flavors.map((flavor) => (
            <FlavorCard key={flavor._id}>
              <h3>{flavor.name}</h3>
              <button onClick={() => handleDeleteFlavor(flavor._id)}>
                Delete
              </button>
            </FlavorCard>
          ))}
        </FlavorsContainer>

        <form onSubmit={handleAddFlavor}>
          <div>
            <label htmlFor="newFlavor">Add New Flavor:</label>
            <input
              type="text"
              id="newFlavor"
              name="newFlavor"
              value={newFlavor}
              onChange={handleNewFlavorChange}
            />
            <button type="submit">Add Flavor</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default FlavorsPage;
