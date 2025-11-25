import { ObjectId } from "mongodb";
import { getCollections } from "../_mongodb.js";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PATCH,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { id } = req.query;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  const { books } = await getCollections();
  const filter = { _id: new ObjectId(id) };

  try {
    if (req.method === "GET") {
      const result = await books.findOne(filter);
      return res.status(200).json(result);
    }

    if (req.method === "PATCH") {
      const updateDoc = { $set: { ...req.body } };
      const options = { upsert: true };
      const result = await books.updateOne(filter, updateDoc, options);
      return res.status(200).json(result);
    }

    if (req.method === "DELETE") {
      const result = await books.deleteOne(filter);
      return res.status(200).json(result);
    }

    res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Book operation failed", error);
    return res.status(500).json({ message: "Book operation failed" });
  }
}
