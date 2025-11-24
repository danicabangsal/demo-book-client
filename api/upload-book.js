import { getCollections } from './_mongodb.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { books } = await getCollections();
    const result = await books.insertOne(req.body);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Failed to upload book', error);
    return res.status(500).json({ message: 'Failed to upload book' });
  }
}
