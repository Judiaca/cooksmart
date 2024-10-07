// // models/Ingredient.js
// const mongoose = require("mongoose");

// const ingredientSchema = new mongoose.Schema({
//   id: { type: String, required: true },
//   name: { type: String, required: true },
//   imageUrl: { type: String, default: "" },
//   flavor: [String],
//   description: { type: String, required: true },
// });

// module.exports = mongoose.model("Ingredient", ingredientSchema);

// models/Ingredient.js
import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Ingredient ||
  mongoose.model("Ingredient", IngredientSchema);
