import React from "react";
import "../assets/styles/Customer.css"

const CustomerSupport = () => {
  return (
    <>
      <h1>Customer Support</h1>
      <h3>
        Feel free to contact us if you need any assistance, any help, or
        questions.
      </h3>

      <div className="card-container">
        <div className="card">
          <h1>Address</h1>
          <p>2nd floor, opposite WaterTank,</p>
          <p>WorkShop Corner, Nanded,</p>
          <p>Maharashtra 431605 INDIA</p>
        </div>

        <div className="card">
          <h1>Phone</h1>
          <p>+91 8625817334</p>
          <p>+91 9890796149</p>
          <p>+91 7387737731</p>
        </div>

        <div className="card">
          <h1>Email</h1>
          <p>hr@tekisky.com</p>
          <p>Sales@Tekisky.Com</p>
        </div>


      
     </div>
      
    </>
  );
};

export default CustomerSupport;
