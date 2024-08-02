import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setInWishlist(wishlist.some(item => item.id === product.id));
  }, [product.id]);

  const handleToggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (inWishlist) {
      wishlist = wishlist.filter(item => item.id !== product.id);
    } else {
      wishlist.push(product);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    setInWishlist(!inWishlist);
  };

  return (
    <div className="relative bg-stone-50 shadow-md overflow-hidden transition-transform transform">
      <Link to={`/product/${product.id}`} className="block">
        <img src={product.image} alt={product.name} className="w-full h-48 hover:scale-105 object-cover" />
        <h3 className="text-lg font-Inter">{product.name}</h3>
        <p className="text-gray-600">€{product.price.toFixed(2)}</p>
      </Link>
      <button className="mt-4 bg-emerald-200 px-4 py-2 rounded hover:bg-emerald-300 transition-colors ">
        <i className="fa-solid fa-cart-plus"></i>
      </button>
      <button
        onClick={handleToggleWishlist}
        className="absolute top-2 right-2 text-red-500 hover:text-red-600 transition-colors duration-300"
      >
        <i className={inWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
      </button>
    </div>
  );
}

export default ProductCard;
