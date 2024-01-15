import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  //   console.log(cart);

  //conditional rendering 1
  let massage;
  if (cart.length === 0) {
    massage = <h3>Add something</h3>;
  }
  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {cart.map((ts) => (
        <p key={ts._id}>
          {ts.name}
          <button onClick={() => handleRemoveCart(ts._id)}>X</button>
        </p>
      ))}
      {massage}

      {cart.length >= 3 ? (
        <h3>You Already added 3+ items</h3>
      ) : (
        <h3>Added least 3 items</h3>
      )}

      {cart.length > 2 && "You can add.."}
      {cart.length > 4 || "5 ta item add koren mia!!"}
    </div>
  );
};

export default Cart;
