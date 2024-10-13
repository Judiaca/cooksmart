import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema({
  id: {
    type: String, // Or Number, if your IDs are numeric
    unique: true, // Ensure uniqueness, but not required
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  flavor: [String],
  description: {
    type: String,
    required: true,
  },
  flavor: [String], // An array of strings for flavors
});

const Ingredient =
  mongoose.models.Ingredient || mongoose.model("Ingredient", IngredientSchema);
export default Ingredient;
