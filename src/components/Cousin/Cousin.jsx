import React, { Children } from "react";

const Cousin = ({ children }) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default Cousin;
