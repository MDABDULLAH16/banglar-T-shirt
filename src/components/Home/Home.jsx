import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";
// import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  // const notify = () => toast("This Product Already Added");
  const handleAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      // notify();
      toast("This product Already Added");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };
  const handleRemoveCart = (_id) => {
    const remaining = cart.filter((ts) => ts._id !== _id);
    setCart(remaining);
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
        {/* <Toaster></Toaster> */}
      </div>
      <div className="cart-container">
        <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
