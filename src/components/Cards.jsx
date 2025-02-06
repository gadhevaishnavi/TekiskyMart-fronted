import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/Cards.css";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://tekisky-mart-backend-one.vercel.app/product/getProduct")
      .then((response) => {
        if (response.data.success) {
          setProducts(response.data.products);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-name">{product.name}</h2>
         
          <p className="product-category">Category: {product.category}</p>
       
          <p className="product-price">
            <span className="mrp">MRP: ${product.mrp}</span> &nbsp;
            <span className="offer-price">
              Offer Price: ${product.offerprice}
            </span>
          </p>
          <button className="buy-now-button">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
