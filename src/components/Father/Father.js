import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../MySelf/Myself";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h2>My Father</h2>
      <p>
        <small>House : {house}</small>
      </p>
      <section className="flex">
        <Sister house={house}></Sister>
        <Brother house={house}></Brother>
        <Myself house={house}></Myself>
      </section>
    </div>
  );
};

export default Father;
