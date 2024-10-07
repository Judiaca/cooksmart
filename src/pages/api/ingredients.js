import dbConnect from "../../lib/db";
import Ingredient from "../../models/Ingredient";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const ingredients = await Ingredient.find({});
    res.status(200).json(ingredients);
  } else if (req.method === "POST") {
    const ingredient = new Ingredient(req.body);
    await ingredient.save();
    res.status(201).json(ingredient);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
