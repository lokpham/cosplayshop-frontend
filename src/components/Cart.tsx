import { Badge, Drawer, Empty } from "antd";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";
import { cart_atom } from "../atoms/myAtom";
import { useAtomValue } from "jotai";
import Button from "src/components/Button";
const Cart = () => {
  const [open, setOpen] = useState(false);
  const data: any = useAtomValue(cart_atom.getAllCart);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-2 shadow-md bg-p font-semibold bg-secondary-300 rounded-lg  p-2">
        <Badge size="small" offset={[3, -5]} count={data.total}>
          <FaShoppingCart
            onClick={showDrawer}
            className="text-[1.5rem] text-secondary-600 hover:text-secondary-500 cursor-pointer hover:animate-spin"
          />
        </Badge>
      </div>
      <Drawer title={`Giỏ hàng (${data.total})`} onClose={onClose} open={open}>
        <div className="flex h-full flex-col">
          <div className="grow overflow-y-auto py-2 divide-y-2">
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
                    discount={item.discount}
                  />
                );
              })
            ) : (
              <Empty />
            )}
          </div>
          <div className=" py-2 ">
            <Button size="full">
              Thanh toán {data.total_money.toLocaleString("en-US")} đ
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
