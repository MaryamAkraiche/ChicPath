import React, { useState, useEffect } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = (id, size) => {
    const updatedCart = cartItems.filter(item => !(item.id === id && item.size === size));
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex items-center mb-4 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
              <div className="flex-grow">
                <h3 className="text-xl">{item.name}</h3>
                <p>€{item.price.toFixed(2)}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-xl">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemoveItem(item.id, item.size)}
                  className="text-red-500 hover:text-red-700"
                >
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
