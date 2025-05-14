import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ success: false, message: 'Cart is empty' });
    }

    try {
      const db = await connectToDatabase();
      const ordersCollection = db.collection('orders'); // You can change 'orders' to whatever you like

      // Save the cart to the 'orders' collection
      const newOrder = {
        items: cart,
        totalPrice: cart.reduce((sum, product) => sum + product.price, 0),
        status: 'Pending', // Initial status
        createdAt: new Date(),
      };

      const result = await ordersCollection.insertOne(newOrder);

      // Respond with success
      res.status(200).json({ success: true, message: 'Order placed successfully', orderId: result.insertedId });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to process your order', error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}