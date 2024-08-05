import { Avatar, Badge, Drawer, Empty } from "antd";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center gap-2 shadow-md bg-p font-semibold bg-secondary-300 rounded-lg  p-2">
      <Badge size="small" offset={[10, -5]} count={1}>
        <FaShoppingCart
          onClick={showDrawer}
          className="text-[1.5rem] text-secondary-600 hover:text-secondary-500 cursor-pointer hover:animate-spin"
        />
      </Badge>
      <Drawer title="Giỏ hàng" onClose={onClose} open={open}>
        <Empty />
      </Drawer>
    </div>
  );
};

export default Cart;
