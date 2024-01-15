import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { AgeContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [age] = useContext(AgeContext);
  return (
    <div className="grandpa">
      <p>Uncle</p>
      <section className="flex">
        <Cousin>Rakib {age}</Cousin>
        <Cousin>Sakib</Cousin>
        <Cousin>Lakib</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
