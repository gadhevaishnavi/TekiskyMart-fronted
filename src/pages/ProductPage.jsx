import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "../assets/styles/ProductPage.css";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext); // Get addToCart from Context
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
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
          setProduct(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (product?.images?.length > 0) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product._id,
        image:product.images[0],
        name: product.name,
        price: product.offerprice,
        quantity: 1,
      });
      Swal.fire({
        title: "Success!",
        text: "Product added to cart successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      // toast.success("Product added to cart successfully!");
    }
  };

  if (loading) return <Loader />;
  if (!product)
    return <div className="product-not-found">Product not found.</div>;

  return (
    <div className="product-page-container">
      <div className="product-slider">
        <img
          className="product-slider-image"
          src={product.images[currentImageIndex]}
          alt={product.name}
        />
      </div>

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
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
