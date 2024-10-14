import { useEffect, useState } from "react";
import PairingCard from "../../components/PairingCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import Layout from "@/components/Layout";
import styled from "styled-components";

const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const PairingsList = () => {
  const [pairings, setPairings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPairings = async () => {
      try {
        const response = await fetch("/api/pairings");
        const data = await response.json();
        setPairings(data.pairings);
      } catch (err) {
        setError("Failed to fetch pairings");
      } finally {
        setLoading(false);
      }
    };

    fetchPairings();
  }, []);
  const handleDeletePairing = async (ingredientId) => {
    try {
      // 1. Update pairings in the database
      const updatedPairings = pairings.map((pairing) => {
        const updatedIngredients = pairing.ingredients.filter(
          (id) => id.toString() !== ingredientId
        );

        if (updatedIngredients.length !== pairing.ingredients.length) {
          // Make a PATCH request to update the pairing
          return fetch(`/api/pairings?id=${pairing._id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients: updatedIngredients }),
          });
        }
        return pairing; // Return the pairing as is if no ingredients were removed
      });

      // Wait for all pairings to be updated
      await Promise.all(updatedPairings);

      // 2. Update the state with the filtered pairings
      setPairings(
        pairings.filter(
          (pairing) =>
            !pairing.ingredients.some((id) => id.toString() === ingredientId)
        )
      );
    } catch (error) {
      console.error("Error deleting pairing:", error);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Layout>
      <div>
        <h1>Ingredient Pairings</h1>
        {pairings.map((pairing) => (
          <PairingCard
            key={pairing._id}
            pairing={pairing}
            onDelete={handleDeletePairing} // Pass the delete function
          />
        ))}
      </div>
    </Layout>
  );
};

export default PairingsList;
