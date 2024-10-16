import mongoose from "mongoose";

const FlavorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

export default mongoose.models && mongoose.models.Flavor
  ? mongoose.models.Flavor
  : mongoose.model("Flavor", FlavorSchema);

// export default mongoose.models.Flavor || mongoose.model("Flavor", FlavorSchema);
