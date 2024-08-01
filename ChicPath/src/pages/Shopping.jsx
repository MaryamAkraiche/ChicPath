import React from 'react';
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";

function ShoppingCart() {
  const cartItems = [
    {
      id: 1,
      name: 'Item 1',
      price: 29.99,
      quantity: 2,
      image: item1,
    },
    {
      id: 2,
      name: 'Item 2',
      price: 39.99,
      quantity: 1,
      image: item2,
    },
    {
      id: 3,
      name: 'Item 3',
      price: 49.99,
      quantity: 1,
      image: item3,
    },
  ];

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
              <div className="flex-grow">
                <h3 className="text-xl">{item.name}</h3>
                <p>€{item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-xl">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
                <button className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <div>
              <p className="text-xl">Total: €{getTotalPrice().toFixed(2)}</p>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
