import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tShirt, handleBuyToCart }) => {
  const { name, price, picture, id } = tShirt;
  return (
    <div className="t-shirt_details">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price : {price}TK</p>
      <button onClick={() => handleBuyToCart(tShirt)}>Buy this</button>
    </div>
  );
};

export default Tshirt;
