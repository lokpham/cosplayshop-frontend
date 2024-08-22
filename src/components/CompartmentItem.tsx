import React, { MouseEvent, MouseEventHandler } from "react";
import { Badge, Modal, notification } from "antd";
import { MdAddShoppingCart } from "react-icons/md";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { card_product } from "../types/product_type";
import { useAtom } from "jotai";
import { cart_atom } from "../atoms/myAtom";
import { Link, redirect } from "react-router-dom";
import PriceDiscount from "./PriceDiscount";
import ProductDetail from "./ProductDetail";
import Button from "src/components/Button";
const CompartmentItem = ({ infor }: { infor: card_product }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Thông báo",
      description: "Thêm thành công",
      duration: 2,
      showProgress: true,
      type: "success",
      placement: "bottomRight",
    });
  };

  const [, setListcart] = useAtom(cart_atom.addCart);
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleSelect = () => {};
  const handleAddCart = () => {
    setOpen(false);
    setListcart({ ...infor });
    openNotification();
  };
  return (
    <>
      <Link
        to={"/product/detail/:id"}
        className="h-full select-none flex  flex-col p-2 hover:shadow-lg transition-shadow"
      >
        <Badge.Ribbon text={"New"} color="gold">
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

        <div className="grow flex justify-between flex-col">
          <p className="font-semibold my-2 line-clamp-1">{infor.name}</p>
          <PriceDiscount price={infor.price} discount={infor.discount} />
          <div className="space-x-2 mt-4 w-fit ml-auto">
            <Button
              onClick={showLoading}
              type="secondary"
              size="small"
              icon={<MdAddShoppingCart />}
            >
              Thêm
            </Button>
          </div>
        </div>
      </Link>
      {contextHolder}
      <Modal
        width={1000}
        title={<p>{loading ? "Vui lòng chờ..." : "Thông tin sản phẩm"}</p>}
        footer={
          <Button
            onClick={handleAddCart}
            type="secondary"
            size="small"
            icon={<MdAddShoppingCart />}
          >
            Thêm
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        {/* <p>2424244242</p> */}
        <div className="h-[50vh] overflow-y-auto">
          <ProductDetail />
        </div>
      </Modal>
    </>
  );
};

export default CompartmentItem;
