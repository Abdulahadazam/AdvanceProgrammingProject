
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; 
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, countryCode, phone, message } = req.body;

  if (!firstName || !email || !phone || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await client.connect();
    const db = client.db('moviehouse'); 
    const collection = db.collection('queries');

    const query = {
      userId: Date.now().toString(), 
      name: `${firstName} ${lastName}`,
      email,
      phone: `${countryCode}${phone}`,
      query: message,
      createdAt: new Date()
    };

    await collection.insertOne(query);

    return res.status(201).json({ message: 'Query stored successfully' });
  } catch (error) {
    console.error('Error saving query:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
