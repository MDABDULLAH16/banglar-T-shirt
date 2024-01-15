import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { picture, price, name, gender } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Gender: {gender}</p>
      <button onClick={() => handleAddToCart(tshirt)} className="btn-addToCart">
        Add To Cart
      </button>
    </div>
  );
};

export default Tshirt;
