import React, { useState } from "react";
import PairingForm from "../../components/PairingForm";
import ErrorMessage from "../../components/ErrorMessage";
import Layout from "@/components/Layout";

const NewPairing = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (pairing) => {
    try {
      // Validate pairing data (ensure ingredients and reason are provided)
      if (
        !pairing.ingredients ||
        pairing.ingredients.length < 2 ||
        !pairing.reason
      ) {
        throw new Error("Please select two ingredients and provide a reason.");
      }

      const response = await fetch("/api/pairings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pairing),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Failed to add pairing";
        throw new Error(errorMessage);
      }

      // Optionally, redirect or show a success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div>
        <h1>Add New Pairing</h1>
        {error && <ErrorMessage message={error} />}
        <PairingForm onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default NewPairing;
