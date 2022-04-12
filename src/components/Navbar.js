import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="navbar">
        <Link className="navLink" to="/">
          <h2>REDUX STORE</h2>
        </Link>
        <Link className="navLink" to="/cart">
          <span className="cartCount">Cart items: {items.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
