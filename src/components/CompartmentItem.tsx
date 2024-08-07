import React, { useMemo } from "react";
import {
  Badge,
  Button,
  Card,
  Modal,
  notification,
  NotificationArgsProps,
  Space,
} from "antd";
import { MdAddShoppingCart } from "react-icons/md";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { card_product } from "../types/product_type";
import { useAtom } from "jotai";
import { cart_atom } from "../atoms/myAtom";
type NotificationPlacement = NotificationArgsProps["placement"];

const Context = React.createContext({ name: "Default" });
const CompartmentItem = ({ infor }: { infor: card_product }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Thông báo",
      description: "Thêm thành công",
      duration: 2,
      showProgress: true,
      type: "success",
    });
  };

  const [, setListcart] = useAtom(cart_atom.addCart);
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleAddCart = () => {
    setOpen(false);
    setListcart({ ...infor });
    openNotification();
  };
  return (
    <div className=" select-none flex flex-col p-2 hover:shadow-lg transition-shadow">
      <Badge.Ribbon text="New" color="pink">
        <div
          className="w-full 
         overflow-hidden"
        >
          <img
            className="hover:scale-110 transition-transform"
            draggable="false"
            src={infor.image}
            alt=""
          />
        </div>
      </Badge.Ribbon>

      <div>
        <p className="font-semibold my-2">{infor.name}</p>
        <p className="space-x-2">
          {infor.discount == 0 ? (
            <span className="text-red-500 my-2">
              {infor.price.toLocaleString("en-US")} đ
            </span>
          ) : (
            <>
              <span className="text-red-500 my-2">
                {infor.discount.toLocaleString("en-US")} đ
              </span>
              <span>-</span>
              <span className="line-through text-gray-400">
                {infor.price.toLocaleString("en-US")} đ
              </span>
            </>
          )}
        </p>
        <div className="space-x-2 w-fit ml-auto">
          <Button
            onClick={showLoading}
            type="default"
            shape="default"
            icon={<MdAddShoppingCart />}
          >
            Thêm
          </Button>
          <Button
            type="default"
            shape="default"
            icon={<FaMagnifyingGlassPlus />}
          >
            Xem
          </Button>
        </div>
      </div>
      {contextHolder}
      <Modal
        title={<p>Bạn muốn thêm sản phẩm này?</p>}
        footer={
          <Button type="primary" onClick={handleAddCart}>
            Thêm
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default CompartmentItem;
