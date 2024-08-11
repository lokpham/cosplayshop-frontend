import React, { useMemo } from "react";
import { Badge, Button, Modal, notification } from "antd";
import { MdAddShoppingCart } from "react-icons/md";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { card_product } from "../types/product_type";
import { useAtom } from "jotai";
import { cart_atom } from "../atoms/myAtom";
import { Link } from "react-router-dom";
import PriceDiscount from "./PriceDiscount";
import ProductDetail from "./ProductDetail";
import sale_badge from "../assets/sale_badge.png";
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

      <div>
        <p className="font-semibold my-2 line-clamp-1">{infor.name}</p>
        <PriceDiscount price={infor.price} discount={infor.discount} />
        <div className="space-x-2 mt-4 w-fit ml-auto">
          <Button
            onClick={showLoading}
            type="default"
            shape="default"
            icon={<MdAddShoppingCart />}
          >
            Thêm
          </Button>
          <Link to={`/product/detail/${infor.id}`}>
            <Button
              type="default"
              shape="default"
              icon={<FaMagnifyingGlassPlus />}
            >
              Xem
            </Button>
          </Link>
        </div>
      </div>
      {contextHolder}
      <Modal
        width={1000}
        title={<p>{loading ? "Vui lòng chờ..." : "Thông tin sản phẩm"}</p>}
        footer={
          <Button type="primary" onClick={handleAddCart}>
            Thêm
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        {/* <p>2424244242</p> */}
        <ProductDetail />
      </Modal>
    </div>
  );
};

export default CompartmentItem;
