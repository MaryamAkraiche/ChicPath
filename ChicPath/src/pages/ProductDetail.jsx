import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";

const sampleProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    image: item1,
    description: 'This is a great product that will make your life easier. It comes with many features and benefits that you will love. Get yours now and enjoy the best quality and performance.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Product 2',
    price: 39.99,
    image: item2,
    description: 'Experience the next level of comfort and style with this amazing product. It is designed to meet your needs and exceed your expectations. Order today and see the difference.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'Product 3',
    price: 49.99,
    image: item3,
    description: 'Discover the ultimate solution for your everyday tasks with this product. It is reliable, efficient, and affordable. Don’t miss out on this incredible offer.',
    sizes: ['S', 'M', 'L', 'XL']
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id.toString() === id);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="container mx-auto p-6 text-center text-red-500">Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name}, Size: ${selectedSize}, Quantity: ${quantity}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center bg-white overflow-hidden">
        <img src={product.image} alt={product.name} className="w-fit bg-gray-50 md:w-1/2 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        <div className="p-6 md:p-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h2>
          <p className="text-2xl font-semibold mb-4 text-gray-700">€{product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-4">
            <label htmlFor="size" className="block text-gray-700 mb-2">Size</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="block w-fit p-2 border border-gray-300 rounded"
            >
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className="block w-fit p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;