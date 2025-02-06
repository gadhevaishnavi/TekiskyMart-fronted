import React from "react";
import '../assets/styles/Footer.css'
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Popular Section */}
        <div className="footer-section">
          <h2 className="footer-title">Popular</h2>
          <ul>
            <li><Link to="/SellWithUs"><a href="#">Sell With Us</a></Link></li>
            <li><Link to="/PreOrder"><a href="#">Pre-Order</a></Link></li>
            <li><Link to="/CustomerSupport"><a href="#">Customer Support</a></Link></li>
          </ul>
        </div>

        {/* Our Commitment Section */}
        <div className="footer-section">
          <h2 className="footer-title">Our Commitment</h2>
          <ul>
            <li>🚀 Fast Delivery (24 Hours)</li>
            <li>🔄 Easy Returns</li>
            <li>💰 Best Price Guaranteed</li>
            <li>🏷️ Competitive Pricing</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h2 className="footer-title">Services</h2>
          <ul>
            <li>Corporate Training</li>
            <li>IT Consultancy</li>
            <li>Software Development</li>
            <li>Website Development</li>
            <li>IT Services Website Development</li>
            
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h2 className="footer-title">Contact</h2>
          <p>📍 2nd floor, opposite WaterTank, WorkShop Corner, Nanded, Maharashtra 431605 INDIA</p>
          <p>📞 +91 8625817334</p>
          <p>📞 +91 9890796149</p>
          <p>✉️ <a href="mailto:sales@tekisky.com">sales@tekisky.com</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tekisky Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
