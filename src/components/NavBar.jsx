import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/images/logo.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../assets/styles/NavBar.css";

const NavBar = () => {
  const { cart } = useContext(CartContext); // Get cart from context
  const [cartCount, setCartCount] = useState(0);

  // Update cart count dynamically when the cart changes
  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Tekisky-logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product/category/gift-items">
              GIFT ITEMS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product/category/perfumes">
              PERFUMES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product/category/clothes">
              CLOTHES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product/category/watches">
              WATCHES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product/category/mobiles">
              MOBILES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/preorder">
              PRE-ORDERS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sellwithus">
              SELL WITH US
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customersupport">
              CUSTOMER SUPPORT
            </Link>
          </li>
        </ul>

        {/* Cart & User Actions */}
        <div className="navbar-actions">
          {/* Search Button */}
          {/* <button className="search-button">Search</button> */}

          {/* Shopping Cart */}
          <div className="cart-container">
            <Link to="/cart" className="cart-link">
              <ShoppingCartOutlinedIcon className="cart-icon" />
              <span className="cart-count">{cartCount}</span>
            </Link>
          </div>

          {/* User Login */}
          <div className="login-container">
            <Link to="/login" className="login-link">
              <AccountCircleOutlinedIcon className="login-icon" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
