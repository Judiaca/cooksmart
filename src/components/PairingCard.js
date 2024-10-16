import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); // Add a subtle shadow
  width: 250px; // Adjust this value as needed

   &:hover { 
    transform: translateY(-5px); // Slightly lift the card on hover
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); // Increase shadow intensity
    transition: all 0.2s ease; // Add a smooth transition

  h2 {
    margin-top: 0; // Remove default top margin
  }
  p {
    word-break: break-word; // Allow long words to break
    overflow-wrap: break-word; // Alternative for older browsers
  }
`;

const PairingCard = ({ pairing, onDelete }) => {
  // Add onDelete prop
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/pairings?id=${pairing._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete pairing");
      }

      onDelete(pairing._id); // Update the pairings state in the parent
      console.log("Pairing deleted successfully");
    } catch (error) {
      console.error("Error deleting pairing:", error);
    }
  };

  return (
    <Card>
      <h2>
        {
          pairing.ingredients // Check if pairing.ingredients is defined
            ? pairing.ingredients
                .map((ingredient) => ingredient.name)
                .join(" & ")
            : "Loading ingredients..." // Or a suitable message
        }
      </h2>
      <p>{pairing.reason}</p>
      <button onClick={handleDelete}>Delete</button>
    </Card>
  );
};

export default PairingCard;
