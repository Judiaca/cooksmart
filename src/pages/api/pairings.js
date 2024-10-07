import dbConnect from "../../lib/db";
import Pairing from "../../models/Pairing";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const pairings = await Pairing.find({});
    res.status(200).json(pairings);
  } else if (req.method === "POST") {
    const pairing = new Pairing(req.body);
    await pairing.save();
    res.status(201).json(pairing);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
