import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="flex items-center gap-2 shadow-md bg-p font-semibold bg-secondary-300 rounded-lg text-secondary-600 p-2">
      <FaShoppingCart className="text-[1.5rem] hover:text-secondary-500 cursor-pointer hover:animate-spin" />
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </div>
  );
};

export default Cart;
