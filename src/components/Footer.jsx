import React from "react";
import '../assets/styles/Footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>POPULAR</h3>
          <ul>
            <li><Link to="/SellWithUs"><a href="#">Sell With Us</a></Link></li>
            <li><Link to="/PreOrder"><a href="#">Pre-Order</a></Link></li>
            <li><Link to="/CustomerSupport"><a href="#">Customer Support</a></Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>OUR COMMITMENT</h3>
          <ul>
            <li>Delivery Within 24 Hours</li>
            <li>Returns Without Questions</li>
            <li>Quality Product At Best Price</li>
            <li>Low Price Compared To Retail Outlet</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
            <li><a href="#">Corporate Training</a></li>
            <li><a href="#">Corporate Trainers</a></li>
            <li><a href="#">IT Consultancy</a></li>
            <li><a href="#">Software Development</a></li>
            <li><a href="#">IT Services</a></li>
            <li><a href="#">Website Development</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>CONTACT</h3>
          <p>2nd Floor, Opposite Water Tank, Workshop Corner, Nanded, Maharashtra 431605, INDIA</p>
          <p>📞 +91 8625817334, +91 9890796149</p>
          <p>📧 <a href="mailto:Sales@Tekisky.Com">Sales@Tekisky.Com</a></p>
          {/* <a href="#" className="login-btn">Login</a> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Tekisky Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

