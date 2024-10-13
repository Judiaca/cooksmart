import dbConnect from "../../lib/db";
import Ingredient from "@/models/Ingredient";
import Pairing from "../../models/Pairing";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "GET") {
    try {
      if (id) {
        const pairing = await Pairing.findById(id).populate("ingredients");
        if (!pairing) {
          return res.status(404).json({ error: "Pairing not found" });
        }
        return res.status(200).json(pairing);
      } else {
        const pairings = await Pairing.find({}).populate("ingredients");
        return res.status(200).json({ pairings }); // Wrap pairings in an object
      }
    } catch (error) {
      console.error("Error fetching pairings:", error);
      return res.status(500).json({ error: "Failed to fetch pairings" });
    }
  } else if (req.method === "POST") {
    try {
      console.log("Incoming data:", req.body);
      const pairing = new Pairing(req.body);
      await pairing.save();
      return res.status(201).json(pairing);
    } catch (error) {
      console.error("Error creating pairing:", error);
      return res.status(500).json({ error: "Failed to create pairing" });
    }
  } else if (req.method === "PATCH") {
    try {
      if (!id) {
        return res
          .status(400)
          .json({ error: "Pairing ID is required for update" });
      }
      const updatedPairing = await Pairing.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedPairing) {
        return res.status(404).json({ error: "Pairing not found" });
      }
      return res.status(200).json(updatedPairing);
    } catch (error) {
      console.error("Error updating pairing:", error);
      return res.status(500).json({ error: "Failed to update pairing" });
    }
  } else if (req.method === "DELETE") {
    try {
      if (!id) {
        return res
          .status(400)
          .json({ error: "Pairing ID is required for deletion" });
      }
      const deletedPairing = await Pairing.findByIdAndDelete(id);
      if (!deletedPairing) {
        return res.status(404).json({ error: "Pairing not found" });
      }
      return res.status(200).json({ message: "Pairing successfully deleted" });
    } catch (error) {
      console.error("Error deleting pairing:", error);
      return res.status(500).json({ error: "Failed to delete pairing" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
