import React, { useContext } from "react";
import { MyContext } from "../Grandpa/Grandpa";

const Myself = ({ ring }) => {
  const money = useContext(MyContext);
  return (
    <div>
      <p>Myself :{ring}</p>
      <p>Myself:{money}</p>
    </div>
  );
};

export default Myself;
