import React, { useState } from 'react';
import '../assets/styles/PreOrder.css';

const PreOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    product: '',
    quantity: '',
    description: '',
    createdit: new Date().toISOString(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // To track submission state
  const [message, setMessage] = useState(''); // To display success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state to true
    setMessage(''); // Clear previous messages

    try {
      const response = await fetch('https://tekisky-mart-backend-one.vercel.app/client/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Pre-order submitted successfully!'); // Success message
      } else {
        setMessage('Failed to submit the pre-order. Please try again.'); // Error message
      }
    } catch (error) {
      setMessage('Error submitting form: ' + error.message); // Catch any errors
    } finally {
      setIsSubmitting(false); // Reset the loading state
    }
  };

  return (
    <div className="form-container">
      <h2>Pre Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Your Mobile Number"
          required
        />
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Pre Order'}
        </button>
      </form>
      {message && <div className="message">{message}</div>} {/* Display success/error message */}
    </div>
  );
};

export default PreOrder;
