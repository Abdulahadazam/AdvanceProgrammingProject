import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; 

const dbName = 'moviehouse';

let cachedClient = null;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!cachedClient) {
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      cachedClient = client;
    }

    const db = cachedClient.db(dbName);
    const collection = db.collection('products');

    const products = await collection.find({}).toArray();

    // Map MongoDB data to frontend format
    const formattedProducts = products.map((product) => ({
      id: product._id.toString(),
      name: product.productName,
      quality: product.productQuality,
      image: product.productImageUrl,
      createdAt: product.createdAt,
    }));

    res.status(200).json({ products: formattedProducts });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
