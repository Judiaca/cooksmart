import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: true,
  },
  //Changed to reference Flavor model
  flavor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Flavor" }],
});

const Ingredient =
  mongoose.models.Ingredient || mongoose.model("Ingredient", IngredientSchema);
export default Ingredient;
