// pages/ingredients/index.js
import React, { useEffect, useState } from "react";
import IngredientCard from "../../components/IngredientCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch("/api/ingredients");
        const data = await response.json();
        setIngredients(data);
      } catch (err) {
        setError("Failed to fetch ingredients");
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Ingredients</h1>
      {ingredients.map((ingredient) => (
        <IngredientCard key={ingredient._id} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsList;
