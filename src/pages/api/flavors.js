import dbConnect from "../../lib/db";
import Flavor from "../../models/Flavor";

export default async function handler(req, res) {
  try {
    await dbConnect();

    if (req.method === "GET") {
      try {
        const flavors = await Flavor.find({});
        return res.status(200).json({ flavors }); // Send the response here
      } catch (error) {
        console.error("Error fetching flavors:", error);
        return res.status(500).json({ error: "Failed to fetch flavors" });
      }
    } else if (req.method === "POST") {
      try {
        const { name } = req.body;
        const newFlavor = new Flavor({ name });
        await newFlavor.save();
        return res.status(201).json(newFlavor); // Send the response here
      } catch (error) {
        console.error("Error creating flavor:", error);
        return res.status(500).json({ error: "Failed to create flavor" });
      }
    } else {
      return res.status(405).json({ error: "Method not allowed" }); // Send the response here
    }
  } catch (error) {
    // This will catch errors in dbConnect
    console.error("Error in /api/flavors:", error);
    return res.status(500).json({ error: "Failed to process request" });
  }
}
