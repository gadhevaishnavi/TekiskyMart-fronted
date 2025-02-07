import React, { useState } from "react";
import axios from "axios";
import '../assets/styles/Sell.css';





const SellWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    productName: '',
    productDetails: '',
    option1: false, // Boolean value for Option 1
    option2: false, // Boolean value for Option 2
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === 'true', // Convert "true"/"false" string from radio buttons to a boolean
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://tekisky-mart-backend-one.vercel.app/pre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMessage(alert(' submitted successfully!'));
        console.log('Response:', result);
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Sell With Us </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={(e) =>
              setFormData({ ...formData, mobileNumber: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={(e) =>
              setFormData({ ...formData, productName: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Product Details</label>
          <textarea
            name="productDetails"
            value={formData.productDetails}
            onChange={(e) =>
              setFormData({ ...formData, productDetails: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Do you have Shop</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="option1"
                value="true"
                checked={formData.option1 === true}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="option1"
                value="false"
                checked={formData.option1 === false}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Do you have G.S.T Number</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="option2"
                value="true"
                checked={formData.option2 === true}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="option2"
                value="false"
                checked={formData.option2 === false}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit Enquiry
        </button>
      </form>
      {responseMessage && (
        <p className="mt-4 text-center text-lg font-medium text-green-600">
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default SellWithUs;