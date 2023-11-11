import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <h4>Please buy at least one item !!!</h4>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Amr jonno akta nao</h3>
        <p>tmr nijer jonno akta nao</p>
        <p>
          <small>amr jonno akta nao, please.</small>
        </p>
      </div>
    );
  } else {
    message = <h4>Thanks for buying !!!</h4>;
  }
  //   console.log(cart);
  return (
    <div className="cart_container">
      <h1 className={cart.length === 2 ? `green` : `blue`}>Order summary</h1>
      <h2 className={`bold ${cart.length === 3 ? `purple` : `yellow`}`}>
        Order quantity : {cart.length}
      </h2>
      {message}
      {/* {cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>Ok keney felo</p>} */}
      {/* <p>and operator</p> */}
      {cart.length === 2 && <h3>Doubke item</h3>}
      {/* <p>or operator</p> */}
      {cart.length === 4 || <p>4ta tShirt nio na</p>}

      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          t-shirt name : {tShirt.name}
          <button onClick={() => handleRemoveItem(tShirt)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

/*
    Conditional Rendering 
    1. use element in a variable and then use if-else to set 
    2. Ternary operation condition ? true : false
    3. && operator (condition is true, i want to display something)
    4. || operator (condition is false, i want to display something)
*/
