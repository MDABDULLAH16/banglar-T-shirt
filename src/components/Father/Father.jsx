import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = ({ ring }) => {
  return (
    <div className="grandpa">
      <p>Father</p>
      <section className="flex">
        <Myself ring={ring}></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;
