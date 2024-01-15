import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const MyContext = createContext(1);
export const AgeContext = createContext(0);
const Grandpa = () => {
  const ring = "diamond";
  const money = 400;
  const [age, setAge] = useState(0);
  return (
    <div className="grandpa">
      <h4>Grandpa ring: {ring}</h4>
      <p>{age}</p>
      <section className="flex">
        <AgeContext.Provider value={[age, setAge]}>
          <MyContext.Provider value={money}>
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </MyContext.Provider>
        </AgeContext.Provider>
      </section>
    </div>
  );
};

export default Grandpa;
