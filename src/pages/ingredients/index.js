import { useEffect, useState } from "react";
import IngredientCard from "../../components/IngredientCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import Layout from "@/components/Layout";
import Link from "next/link";
import styled from "styled-components";

// Create a styled component for the container
const IngredientsContainer = styled.div`
  display: flex; // Arrange items horizontally
  flex-wrap: wrap; // Allow items to wrap onto multiple lines
  gap: 20px; // Add space between items
`;

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch("/api/ingredients");
        const data = await response.json();
        setIngredients(data.ingredients); // Access the 'ingredients' property
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
  if (!ingredients) return <p>No ingredients found.</p>;

  const handleDeleteIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient._id !== id));
  };

  return (
    <Layout>
      <div>
        <h1>Ingredients</h1>
        <Link href="/ingredients/new">
          <button>Add New Ingredient</button>
        </Link>

        <IngredientsContainer>
          {" "}
          {/* Use the styled container */}
          {ingredients.map((ingredient) => (
            <IngredientCard
              key={ingredient._id}
              ingredient={ingredient}
              onDelete={handleDeleteIngredient}
            />
          ))}
        </IngredientsContainer>
      </div>
    </Layout>
  );
};

export default IngredientsList;
