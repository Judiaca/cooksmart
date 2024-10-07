// pages/pairings/index.js
import React, { useEffect, useState } from "react";
import PairingCard from "../../components/PairingCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const PairingsList = () => {
  const [pairings, setPairings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPairings = async () => {
      try {
        const response = await fetch("/api/pairings");
        const data = await response.json();
        setPairings(data);
      } catch (err) {
        setError("Failed to fetch pairings");
      } finally {
        setLoading(false);
      }
    };

    fetchPairings();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Ingredient Pairings</h1>
      {pairings.map((pairing) => (
        <PairingCard key={pairing._id} pairing={pairing} />
      ))}
    </div>
  );
};

export default PairingsList;
