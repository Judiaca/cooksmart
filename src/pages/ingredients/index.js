import { useEffect, useState } from "react";
import IngredientCard from "../../components/IngredientCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import Layout from "@/components/Layout";
import Link from "next/link";

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
        {ingredients.map((ingredient) => (
          <IngredientCard
            key={ingredient._id}
            ingredient={ingredient}
            onDelete={handleDeleteIngredient} // Pass the function here
          />
        ))}
      </div>
    </Layout>
  );
};

export default IngredientsList;
