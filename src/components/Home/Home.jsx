import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tshirt) => {
    const newCart = [...cart, tshirt];
    setCart(newCart);
  };
  return (
    <div className="main-container">
      <div className="t-shirt-container">
        {tshirts.map((ts) => (
          <Tshirt
            tshirt={ts}
            handleAddToCart={handleAddToCart}
            key={ts._id}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
