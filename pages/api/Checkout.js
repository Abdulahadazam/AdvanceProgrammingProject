// pages/api/checkout.js
import { connectToDatabase } from '../../lib/mongodb';
import Order from '../../models/Order';  // Import the Order model

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to MongoDB
      const { db } = await connectToDatabase();

      const { cart } = req.body;

      // Calculate the total price of the cart
      const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

      // Create a new order document
      const order = new Order({
        products: cart.map((product) => ({
          productId: product.id,
          quantity: 1, // Assuming 1 quantity for each item in the cart. Adjust if necessary.
          price: product.price,
        })),
        totalPrice,
      });

      // Save the order to the database
      await order.save();

      return res.status(200).json({ success: true, order });
    } catch (error) {
      console.error('Error during checkout:', error);
      return res.status(500).json({ success: false, message: 'Checkout failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
