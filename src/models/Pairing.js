import mongoose from "mongoose";
import Ingredient from "./Ingredient";

const PairingSchema = new mongoose.Schema({
  ingredients: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Ingredient", required: true },
  ],
  reason: { type: String, required: true },
});

const Pairing =
  mongoose.models.Pairing || mongoose.model("Pairing", PairingSchema);

export default Pairing;
