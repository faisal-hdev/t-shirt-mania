import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <h4>Please buy at least one item !!!</h4>;
  } else {
    message = <h4>Thanks for buying !!!</h4>;
  }
  //   console.log(cart);
  return (
    <div className="cart_container">
      <h1>Order summary</h1>
      <h2>Order quantity : {cart.length}</h2>
      {message}
      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name}
          <button onClick={() => handleRemoveItem(tShirt)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

/*
    Conditional Rendering 
    1. use element if-else
*/
