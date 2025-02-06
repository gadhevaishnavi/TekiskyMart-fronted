import React from "react";
import "../assets/styles/NavBar.css";
import { useState } from "react";
import "../assets/styles/PreOrder.css"


const PreOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    product: "",
    quantity: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Pre-Order Submitted Successfully!");
  };

  return (
    <div className="preorder-container">
      <h2>Pre Order</h2>
     

      <form onSubmit={handleSubmit} className="preorder-form">
        <label>
          Your Name <span className="required">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>
          Your Mobile Number <span className="required">*</span>
        </label>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label>
          Which Product You Want To Purchase <span className="required">*</span>
        </label>
        <select name="product" value={formData.product} onChange={handleChange} required>
          <option  value="">Select Product</option>
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>

        <label>
          How Much Quantity <span className="required">*</span>
        </label>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn">Submit Pre Order</button>
      </form>
    </div>
  );
};

export default PreOrder;
