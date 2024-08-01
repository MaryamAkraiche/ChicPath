import React from "react";
import ProductCard from "../components/ProductCard";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";


const sampleProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    image: item1,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 39.99,
    image: item2,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 49.99,
    image: item3,
  },
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    image: item1,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 39.99,
    image: item2,
  },
];

function Home() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-6">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
