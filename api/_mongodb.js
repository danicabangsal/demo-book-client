import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise;

export async function getCollections() {
  if (!clientPromise) {
    clientPromise = client.connect();
  }

  const connection = await clientPromise;
  const db = connection.db('bookInventory');
  return {
    books: db.collection('Books'),
  };
}
