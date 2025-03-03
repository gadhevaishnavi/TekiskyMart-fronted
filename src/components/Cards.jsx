import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/Cards.css";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  // Function to handle card click
  const handleCardClick = async (productId) => {
    try {
      const response = await axios.get(
        `https://tekisky-mart-backend-one.vercel.app/product/getProductById/${productId}`
      );
      if (response.data.success) {
        navigate(`/product/${productId}`, {
          state: { product: response.data.product },
        });
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <div
          key={product._id}
          className="product-card"
          onClick={() => handleCardClick(product._id)}
        >
          <div className="product-image-container">
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-category">Category: {product.category}</p>

            <div className="product-pricing">
              <span className="mrp">MRP: ${product.mrp}</span>
              <span className="offer-price">
                Offer Price: ${product.offerprice}
              </span>
            </div>
          </div>
          <div className="product-button-container">
            <button
              className="buy-now-button"
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering card click event
                navigate("/login");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
