import mongoose from "mongoose";
import dbConnect from "../../lib/db";
import Ingredient from "../../models/Ingredient";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const { id } = req.query;

    if (req.method === "GET") {
      try {
        if (id) {
          // If an ID is provided, fetch a specific ingredient
          const ingredient = await Ingredient.findById(id).populate("flavor");
          if (!ingredient) {
            return res.status(404).json({ error: "Ingredient not found" });
          }
          return res.status(200).json(ingredient); // Return ingredient directly
        } else {
          // Otherwise, fetch all ingredients
          const ingredients = await Ingredient.find({}).populate("flavor");
          return res.status(200).json({ ingredients }); // Return ingredients directly
        }
      } catch (error) {
        console.error("Error fetching ingredients:", error);
        return res.status(500).json({ error: "Failed to fetch ingredients" });
      }
    } else if (req.method === "POST") {
      try {
        const flavorIds = req.body.flavor.map(
          (flavorId) => new mongoose.Types.ObjectId(flavorId)
        );
        const newIngredient = new Ingredient({
          ...req.body,
          flavor: flavorIds,
        });

        await newIngredient.save();
        return res.status(201).json(newIngredient);
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
          { $set: { flavor: req.body.flavor } }, // Update only the flavor field
          { new: true }
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
  } catch (error) {
    console.error("Error in /api/ingredients:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
