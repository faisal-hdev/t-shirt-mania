import React, { useContext } from "react";
import { moneyContext } from "../GrandPa/GrandPa";

const Sister = ({ house }) => {
  const [money, setMoney] = useContext(moneyContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>
        <small>House : {house}</small>
      </p>
      <p>
        <small>Money : {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
    </div>
  );
};

export default Sister;
