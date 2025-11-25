import { getCollections } from "./_mongodb.js";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins, or specify your domain
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { books } = await getCollections();
    const query = {};

    if (req.query?.category) {
      query.category = req.query.category;
    }

    const result = await books.find(query).toArray();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Failed to fetch books", error);
    return res.status(500).json({ message: "Failed to fetch books" });
  }
}
