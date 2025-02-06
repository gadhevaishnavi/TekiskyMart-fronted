import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/styles/CategoryPage.css"; 
import Loader from "../components/Loader";

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products based on the category
    setLoading(true);
    axios
      .get(`https://tekisky-mart-backend-one.vercel.app/product/getProduct`)
      .then((response) => {
        if (response.data.success) {
          const filteredProducts = response.data.products.filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase()
          );
          setProducts(filteredProducts);
        }
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="category-page-container">
      <h1 className="category-page-title">{category} Products</h1>

      {loading ? (
        <div className="loading-spinner">
          <Loader/>
        </div>
      ) : (
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <img
                  className="product-image"
                  src={product.images[0]}
                  alt={product.name}
                />
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">
                    <span className="mrp">MRP: ${product.mrp}</span>&nbsp;
                    <span className="offer-price">
                      Offer Price: ${product.offerprice}
                    </span>
                  </p>
                  <Link to={`/product/${product._id}`} className="product-link">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
