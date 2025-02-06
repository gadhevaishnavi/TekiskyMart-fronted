import React, { useState } from "react";
import axios from "axios";
import '../assets/styles/Sell.css'


const API_URL = "https://tekisky-mart-backend-one.vercel.app/pre";

const SellWithUs = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    product: "",
    details: "",
    shop: "No",
    gst: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, form);
      alert("Enquiry submitted successfully!");
    } catch (error) {
      alert("Error submitting enquiry: " + error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Sell With Us</h1>
      <div className="form-card">
        <h2 className="subtitle">Terms & Conditions</h2>
        <ul className="terms-list">
          <li>Authentic and reliable genuine products</li>
          <li>No illegal materials</li>
          <li>All government norms should be followed</li>
          <li>₹1000 subscription for 6 months with a maximum of 10 product sales</li>
          <li>Deals only for premium customers</li>
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name *</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter Name" required />
          </div>
          <div className="form-group">
            <label>Mobile Number *</label>
            <input type="text" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" required />
          </div>
          <div className="form-group">
            <label>Which Product Do You Want To Sell *</label>
            <input type="text" name="product" value={form.product} onChange={handleChange} placeholder="Enter Product Name" required />
          </div>
          <div className="form-group">
            <label>Product Details *</label>
            <textarea name="details" value={form.details} onChange={handleChange} placeholder="Enter Product Details" required></textarea>
          </div>
          <div className="form-group">
            <label>Do You Have a Shop?</label>
            <label><input type="radio" name="shop" value="Yes" onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="shop" value="No" onChange={handleChange} defaultChecked /> No</label>
          </div>
          <div className="form-group">
            <label>Do You Have a G.S.T. Number?</label>
            <label><input type="radio" name="gst" value="Yes" onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="gst" value="No" onChange={handleChange} defaultChecked /> No</label>
          </div>

          <button type="submit" className="submit-btn">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default SellWithUs;
