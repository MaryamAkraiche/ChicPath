import React, { useState, useEffect } from 'react';
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
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id && item.size === selectedSize);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, size: selectedSize, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Added to cart: ${product.name}, Size: ${selectedSize}, Quantity: ${quantity}`);
  };

  const toggleWishlist = () => {
    let updatedWishlist = [];
    if (wishlist.find(item => item.id === product.id)) {
      updatedWishlist = wishlist.filter(item => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
  };

  const isProductInWishlist = wishlist.some(item => item.id === product.id);

  if (!product) {
    return <div className="container mx-auto p-6 text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center bg-white overflow-hidden">
        <div className="relative w-full md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
          <button onClick={toggleWishlist} className="absolute top-4 right-4 text-2xl text-red-500">
            <i className={`fa${isProductInWishlist ? 's' : 'r'} fa-heart`} />
          </button>
        </div>
        <div className="p-6 md:p-10 w-full">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h2>
          <p className="text-2xl font-semibold mb-4 text-gray-700">€{product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-4">
            <label htmlFor="size" className="block text-gray-700 mb-2">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="block w-fit p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>Select a size</option>
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="block w-fit p-2 border border-gray-300 rounded"
              placeholder="1"
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
