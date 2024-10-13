import dbConnect from "../../lib/db";
import Ingredient from "../../models/Ingredient";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query; // Get the ingredient ID from the query parameters

  if (req.method === "GET") {
    try {
      if (id) {
        // If an ID is provided, fetch a specific ingredient
        const ingredient = await Ingredient.findById(id);
        if (!ingredient) {
          return res.status(404).json({ error: "Ingredient not found" });
        }
        return res.status(200).json(ingredient);
      } else {
        // Otherwise, fetch all ingredients
        const ingredients = await Ingredient.find({});
        return res.status(200).json({ ingredients });
      }
    } catch (error) {
      console.error("Error fetching ingredients:", error);
      return res.status(500).json({ error: "Failed to fetch ingredients" });
    }
  } else if (req.method === "POST") {
    try {
      const newIngredient = {
        ...req.body,
        id: uuidv4(),
      };
      const ingredient = new Ingredient(newIngredient);
      await ingredient.save();
      return res.status(201).json(ingredient);
    } catch (error) {
      console.error("Error creating ingredient:", error);
      return res.status(500).json({ error: "Failed to create ingredient" });
    }
  } else if (req.method === "PATCH") {
    try {
      if (!id) {
        return res
          .status(400)
          .json({ error: "Ingredient ID is required for update" });
      }
      const updatedIngredient = await Ingredient.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
      if (!updatedIngredient) {
        return res.status(404).json({ error: "Ingredient not found" });
      }
      return res.status(200).json(updatedIngredient);
    } catch (error) {
      console.error("Error updating ingredient:", error);
      return res.status(500).json({ error: "Failed to update ingredient" });
    }
  } else if (req.method === "DELETE") {
    try {
      if (!id) {
        return res
          .status(400)
          .json({ error: "Ingredient ID is required for deletion" });
      }
      const deletedIngredient = await Ingredient.findByIdAndDelete(id);
      if (!deletedIngredient) {
        return res.status(404).json({ error: "Ingredient not found" });
      }
      return res
        .status(200)
        .json({ message: "Ingredient successfully deleted" });
    } catch (error) {
      console.error("Error deleting ingredient:", error);
      return res.status(500).json({ error: "Failed to delete ingredient" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
