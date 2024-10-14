import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  // username: { type: String, required: true, unique: true }, // Ensure usernames are unique
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
