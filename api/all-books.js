import { getCollections } from './_mongodb.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: 'Method Not Allowed' });
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
    console.error('Failed to fetch books', error);
    return res.status(500).json({ message: 'Failed to fetch books' });
  }
}
