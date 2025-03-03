import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/styles/CategoryPage.css"
import Loader from "../components/Loader";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <div className="category-products-container">
      <h1 className="category-products-title">{category} Products</h1>

      {loading ? (
        <div className="category-products-loading">
          <Loader />
        </div>
      ) : (
        <div className="category-products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="category-product-card">
                <img
                  className="category-product-image"
                  src={product.images[0]}
                  alt={product.name}
                />
                <div className="category-product-details">
                  <h3 className="category-product-name">{product.name}</h3>
                  <p className="category-product-price">
                    <span className="category-mrp">MRP: ${product.mrp}</span>
                    &nbsp;
                    <span className="category-offer-price">
                      Offer Price: ${product.offerprice}
                    </span>
                  </p>
                  <Link
                    to={`/product/${product._id}`}
                    className="category-product-link"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="category-no-products">
              No products found in this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
