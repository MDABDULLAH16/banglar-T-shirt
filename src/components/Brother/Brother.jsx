import React, { useContext } from "react";
import { AgeContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const [age, setAge] = useContext(AgeContext);

  return (
    <div>
      <p>Brother: {age}</p>
      <button onClick={() => setAge(age + 22)}>age</button>
    </div>
  );
};

export default Brother;
