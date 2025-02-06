import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/styles/ProductPage.css"; // Import the CSS for styling
import Loader from "../components/Loader"; // Import the Loader component

const ProductPage = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState();

  useEffect(() => {
    // console.log("fetching product with ID:",productId)//log the product id
    setLoading(true);
    axios
      .get(
        `https://tekisky-mart-backend-one.vercel.app/product/getProductById/${productId}`
      )
      .then((response) => {
        if (response.data.success && response.data.product) {
          setProduct(response.data.product);
        } else {
          console.error("Product not found in API response.");
          setProduct(null); // Set product to null to show "Product not found" message
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProduct(null); // In case of an error, set product to null
      })
      .finally(() => setLoading(false));
  }, [productId]);


  // Function to automatically change the image in the slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (product && product.images && product.images.length > 0) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [product]);

  if (loading) {
    return <Loader />; // Show loading spinner while fetching product data
  }

  if (!product) {
    return (
      <div className="product-not-found">
        Product not found. Please try again later.
      </div>
    ); // Display error if no product found
  }

  return (
    <div className="product-page-container">
      {/* Product Image Slider */}
      <div className="product-slider">
        <img
          className="product-slider-image"
          src={product.images[currentImageIndex]}
          alt={product.name}
        />
      </div>

      {/* Product Details Section */}
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-heading">{product.heading}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          <span className="mrp">MRP: ${product.mrp}</span>&nbsp;
          <span className="offer-price">
            Offer Price: ${product.offerprice}
          </span>
        </div>
        <div className="product-weight">
          <span>Weight/Size: {product.WeightSize}</span>
        </div>
        <div className="product-category">
          <span>Category: {product.category}</span>
        </div>
        <div className="product-seller">
          <span>Seller: {product.Seller}</span>
        </div>
        <div className="product-add-to-cart">
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
