import React, { useContext } from "react";
import { moneyContext } from "../GrandPa/GrandPa";

const Uncle = ({ house }) => {
  const [money, setMoney] = useContext(moneyContext);
  return (
    <div>
      <h1>Uncle</h1>
      <p>
        <small>House : {house}</small>
      </p>
      <p>
        <small>Money : {money}</small>
      </p>
    </div>
  );
};

export default Uncle;
