import React from "react";

const Cart = ({ cart }) => {
  //   console.log(cart);

  return (
    <div>
      {cart.map((ts) => (
        <p key={ts._id}>
          {ts.name}
          <button>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
