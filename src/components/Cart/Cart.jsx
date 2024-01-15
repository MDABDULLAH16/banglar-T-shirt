import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  //   console.log(cart);

  return (
    <div>
      {cart.map((ts) => (
        <p key={ts._id}>
          {ts.name}
          <button onClick={() => handleRemoveCart(ts._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
