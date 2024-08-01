import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-stone-50 shadow-md overflow-hidden transition-transform transform">
        <img src={product.image} alt={product.name} className="w-full h-48 hover:scale-105 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-Inter">{product.name}</h3>
          <p className="text-gray-600">€{product.price.toFixed(2)}</p>
          <button className="mt-4 bg-emerald-200  px-4 py-2 rounded hover:bg-emerald-300 transition-colors ">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
