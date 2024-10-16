// src/pages/api/flavors.js

import dbConnect from "../../lib/db";
import Flavor from "../../models/Flavor";

export default async function handler(req, res) {
  try {
    await dbConnect();

    if (req.method === "GET") {
      try {
        const flavors = await Flavor.find({});
        return res.status(200).json({ flavors });
      } catch (error) {
        console.error("Error fetching flavors:", error);
        return res.status(500).json({ error: "Failed to fetch flavors" });
      }
    } else if (req.method === "POST") {
      try {
        const { name } = req.body;
        const newFlavor = new Flavor({ name });
        await newFlavor.save();
        return res.status(201).json(newFlavor);
      } catch (error) {
        console.error("Error creating flavor:", error);
        return res.status(500).json({ error: "Failed to create flavor" });
      }
    } else if (req.method === "DELETE") {
      try {
        const { id } = req.query;
        if (!id) {
          return res
            .status(400)
            .json({ error: "Flavor ID is required for deletion" });
        }

        const deletedFlavor = await Flavor.findByIdAndDelete(id);
        if (!deletedFlavor) {
          return res.status(404).json({ error: "Flavor not found" });
        }

        // Optional: Remove this flavor from any ingredients that use it
        // await Ingredient.updateMany(
        //   { flavor: id },
        //   { $pull: { flavor: id } }
        // );

        return res.status(200).json({ message: "Flavor deleted successfully" });
      } catch (error) {
        console.error("Error deleting flavor:", error);
        return res.status(500).json({ error: "Failed to delete flavor" });
      }
    } else {
      return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error in /api/flavors:", error);
    return res.status(500).json({ error: "Failed to process request" });
  }
}
