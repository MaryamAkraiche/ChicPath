import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl mb-6 text-center">My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5">
        {wishlist.length > 0 ? (
          wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-3">No items in your wishlist</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
