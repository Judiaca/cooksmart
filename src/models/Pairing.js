// // models/Pairing.js
// const mongoose = require("mongoose");

// const pairingSchema = new mongoose.Schema({
//   _id: { type: String, required: true },
//   ingredients: [{ type: String, required: true }], // Array of ingredient ids
//   reason: { type: String, required: true },
// });

// module.exports = mongoose.model("Pairing", pairingSchema);

// models/Pairing.js
import mongoose from "mongoose";

const PairingSchema = new mongoose.Schema({
  ingredient1: { type: String, required: true },
  ingredient2: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Pairing ||
  mongoose.model("Pairing", PairingSchema);
