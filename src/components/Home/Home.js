import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleBuyToCart = (tShirts) => {
    const exists = cart.find((ts) => ts._id === tShirts._id);
    if (exists) {
      alert("t-shirt already added");
    } else {
      const newCart = [...cart, tShirts];
      setCart(newCart);
      //   alert("Successfully added");
    }
  };

  const handleRemoveItem = (tshirt) => {
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(remaining);
  };

  return (
    <div className="home_container">
      <div className="t-shirt_container">
        {tShirts.map((tShirt) => (
          <Tshirt
            tShirt={tShirt}
            key={tShirt._id}
            handleBuyToCart={handleBuyToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart_container">
        <Cart handleRemoveItem={handleRemoveItem} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
