// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product A', price: 50 },
  { id: 2, name: 'Product B', price: 30 },
  { id: 3, name: 'Product C', price: 20 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

