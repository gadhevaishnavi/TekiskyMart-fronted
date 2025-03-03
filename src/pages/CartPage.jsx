import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../assets/styles/CartPage.css";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };


  console.log(cart,"heelo")
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div className="cart-actions">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
