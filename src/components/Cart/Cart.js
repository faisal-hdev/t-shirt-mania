import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart_container">
      <h2>Order summary</h2>
      <h3>Order quantity : {cart.length}</h3>
    </div>
  );
};

export default Cart;
