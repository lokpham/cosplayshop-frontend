import React from "react";
import { MdDelete } from "react-icons/md";
import { cart_atom } from "../atoms/myAtom";
import { useSetAtom } from "jotai";
const CartItem = ({
  name,
  quantity,
  image,
  price,
  id,
}: {
  name: string;
  quantity: number;
  image: string;
  price: number;
  id: number;
}) => {
  const deleteCartItem = useSetAtom(cart_atom.deleteCartItem);
  const handleDeleteCartItem = () => {
    deleteCartItem(id);
  };
  return (
    <div className="flex gap-2 p-2 hover:bg-gray-300">
      <img className="size-[50px] object-fill" src={image} alt="" />
      <div className="space-y-1">
        <p className="font-semibold">{name}</p>
        <p>
          Số lượng:{" "}
          <input
            className="outline-none ring-2 ring-gray-500 max-w-[60px] pl-2
          "
            step={1}
            min={1}
            max={40}
            value={quantity}
            type="number"
            name=""
            id=""
          />{" "}
        </p>
        <p>Giá: {price.toLocaleString("en-US")} đ</p>
        <p>
          Tổng: {(price * quantity).toLocaleString("en-US")} đ{" "}
          {"(" + price.toLocaleString("en-US") + " x" + quantity + ")"}
        </p>
      </div>
      <div>
        <MdDelete
          onClick={handleDeleteCartItem}
          className="text-[1.5rem] text-gray-400 hover:text-gray-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartItem;
