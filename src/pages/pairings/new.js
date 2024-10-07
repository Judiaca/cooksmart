// pages/pairings/new.js
import React, { useState } from "react";
import PairingForm from "../../components/PairingForm";
import ErrorMessage from "../../components/ErrorMessage";

const NewPairing = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (pairing) => {
    try {
      const response = await fetch("/api/pairings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pairing),
      });

      if (!response.ok) throw new Error("Failed to add pairing");
      // Optionally, redirect or show success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Add New Pairing</h1>
      {error && <ErrorMessage message={error} />}
      <PairingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewPairing;
