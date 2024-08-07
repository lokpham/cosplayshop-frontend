import { Avatar, Badge, Drawer, Empty } from "antd";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";
import { cart_atom } from "../atoms/myAtom";
import { useAtomValue } from "jotai";
const Cart = () => {
  const [open, setOpen] = useState(false);
  const data: any = useAtomValue(cart_atom.getAllCart);
  console.log(data);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-2 shadow-md bg-p font-semibold bg-secondary-300 rounded-lg  p-2">
      <Badge size="small" offset={[10, -5]} count={data.total}>
        <FaShoppingCart
          onClick={showDrawer}
          className="text-[1.5rem] text-secondary-600 hover:text-secondary-500 cursor-pointer hover:animate-spin"
        />
      </Badge>
      <Drawer title="Giỏ hàng" onClose={onClose} open={open}>
        <div className="divide-y-2">
          {data.list.length > 0 ? (
            data.list.map((item: any, index: number) => {
              return (
                <CartItem
                  key={index}
                  id={item.id}
                  quantity={item.quantity}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              );
            })
          ) : (
            <Empty />
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
