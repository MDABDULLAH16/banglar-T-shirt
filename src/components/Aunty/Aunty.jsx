import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div className="grandpa">
      <p>Aunty</p>
      <section className="flex">
        <Cousin>Maysha</Cousin>
        <Cousin>Aysha</Cousin>
        <Cousin>Raysha</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
