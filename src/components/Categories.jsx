import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/styles/Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products to group by category and dynamically populate categories
    axios
      .get("https://tekisky-mart-backend-one.vercel.app/product/getProduct")
      .then((response) => {
        if (response.data.success) {
          const productList = response.data.products;

          // Group products by category
          const groupedCategories = productList.reduce((acc, product) => {
            if (!acc[product.category]) {
              acc[product.category] = [];
            }
            acc[product.category].push(product);
            return acc;
          }, {});

          // Set the categories state as the grouped categories
          setCategories(groupedCategories);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="categories-container">
      <h1 className="categories-title">Shop by Category</h1>
      <div className="categories-grid">
        {Object.keys(categories).map((category) => {
          const categoryProducts = categories[category];
          const categoryImage = categoryProducts[0].images[0]; // First product image in the category

          return (
            <div className="category-card" key={category}>
              <Link
                to={`/product/category/${category.toLowerCase()}`}
                className="category-link"
              >
                <img
                  className="category-image"
                  src={categoryImage}
                  alt={category}
                />
                <h2 className="category-name">{category}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
