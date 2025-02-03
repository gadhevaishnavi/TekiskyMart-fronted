import React from "react";
import '../assets/styles/Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-section">
              <h4>POPULAR</h4>
              <hr />
              <ul>
                <li>Sell With Us</li>
                <li>Pre-Order</li>
                <li>Customer Support</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>OUR COMMITMENT</h4>
              <hr />
              <ul>
                <li>Delivery Within 24 Hours</li>
                <li>Returns Without Questions</li>
                <li>Quality Product At Best Price</li>
                <li>Low Price Compare To Your Retail Outlet</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>SERVICES</h4>
              <hr />
              <ul>
                <li>Corporate Training</li>
                <li>Corporate Trainers</li>
                <li>IT Consultancy</li>
                <li>Software Development</li>
                <li>IT Services</li>
                <li>Website Development</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>CONTACT</h4>
              <hr />
              <address>
                2nd Floor, Opposite WaterTank, WorkShop Corner, Nanded,
                Maharashtra 431605 INDIA
                <br />
                +91 8625817334, +91 9890796149
                <br />
                <a href="mailto:Sales@Tekisky.Com">Sales@Tekisky.Com</a>
                <br />
                <a href="#">Login</a>
              </address>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <p>
              Copyright © Tekisky Pvt Ltd All Rights Reserved.
              <br />
              +91 7387737731, +91 8625817334
              <br />
              <a href="mailto:Sales@Tekisky.Com">Sales@Tekisky.Com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
