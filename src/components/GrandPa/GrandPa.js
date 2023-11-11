import React, { createContext, useState } from "react";
import "./GrandPa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle /Uncle";
import Aunty from "../Aunty/Aunty";

export const RingContext = createContext("Golden Ring");
export const moneyContext = createContext(555);

const GrandPa = () => {
  const [house, setHouse] = useState(10);
  const [money, setMoney] = useState(555);

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <moneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa">
          <h2>Grand Pa</h2>
          <section className="flex">
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
          </section>
        </div>
      </moneyContext.Provider>
    </RingContext.Provider>
  );
};

export default GrandPa;
