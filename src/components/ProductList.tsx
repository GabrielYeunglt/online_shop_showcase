// src/components/ProductList.js
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../lib/type";

const products: Product[] = [
    { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 30 },
    { id: 3, name: "Product C", price: 20 },
];

const addToCart = () => {
    //TODO
    return
}

const ProductList = () => {
    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
