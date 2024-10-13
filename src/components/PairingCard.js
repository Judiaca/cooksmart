import React from "react";

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
    <div>
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
    </div>
  );
};

export default PairingCard;
