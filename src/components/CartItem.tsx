import { MdDelete } from "react-icons/md";
import { cart_atom } from "../atoms/myAtom";
import { useSetAtom } from "jotai";
import InputQuantity from "./InputQuantity";
import { Image } from "antd";
import { Link } from "react-router-dom";
const CartItem = ({
  name,
  quantity,
  image,
  price,
  id,
  discount,
}: {
  name: string;
  quantity: number;
  image: string;
  price: number;
  id: number;
  discount: number;
}) => {
  const deleteCartItem = useSetAtom(cart_atom.deleteCartItem);
  const handleDeleteCartItem = () => {
    deleteCartItem(id);
  };
  return (
    <div className="flex justify-between gap-2 p-2 hover:bg-gray-300">
      <Image
        className="shadow-md "
        wrapperClassName="size-[50px] shrink-0"
        src={image}
        alt="cart-item"
      />
      <div className="space-y-1 shrink">
        <Link
          to={"/cart/list"}
          reloadDocument
          className="font-semibold hover:underline cursor-pointer hover:text-secondary-600"
        >
          {name}
        </Link>
        <p className="font-semibold">Số lượng: {quantity}</p>
        <p>Giá: {(discount ? discount : price).toLocaleString("en-US")} đ</p>
        <p>
          Tổng:{" "}
          {((discount ? discount : price) * quantity).toLocaleString("en-US")} đ{" "}
          {"(" +
            (discount ? discount : price).toLocaleString("en-US") +
            " x" +
            quantity +
            ")"}
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
