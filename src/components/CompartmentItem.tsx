import React, { MouseEvent, MouseEventHandler } from "react";
import { Badge, Image, Modal, notification } from "antd";
import { MdAddShoppingCart } from "react-icons/md";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { card_product } from "../types/product_type";
import { useAtom } from "jotai";
import { cart_atom } from "../atoms/myAtom";
import { Link, redirect } from "react-router-dom";
import PriceDiscount from "./PriceDiscount";
import ProductDetail from "./ProductDetail";
import Button from "src/components/Button";
const CompartmentItem = ({ infor }: { infor: any }) => {
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

  return (
    <>
      <Link
        to={"/product/detail/" + infor.id}
        className="h-full select-none flex  flex-col p-2 hover:shadow-lg transition-shadow"
      >
        <Badge.Ribbon text={"New"} color="gold">
          <div
            className="w-full 
           overflow-hidden"
          >
            <Image
              wrapperClassName="hover:scale-110 transition-transform"
              src={infor.image}
              alt={infor.id + ""}
              preview={false}
            />
          </div>
        </Badge.Ribbon>

        <div className="grow flex justify-between flex-col">
          <p className="font-semibold my-2 line-clamp-1">{infor.name}</p>
          <PriceDiscount price={infor.price} discount={infor.discount} />
          <div className="space-x-2 mt-4 w-fit ml-auto">
            <Button
              onClick={showLoading}
              type_button="secondary"
              size="small"
              icon={<MdAddShoppingCart />}
            >
              Thêm
            </Button>
          </div>
        </div>
      </Link>
      <Modal
        width={1000}
        title={<p>{loading ? "Vui lòng chờ..." : "Thông tin sản phẩm"}</p>}
        loading={loading}
        footer={false}
        open={open}
        onCancel={() => setOpen(false)}
      >
        {/* <p>2424244242</p> */}
        <div className="h-[50vh] overflow-y-auto">
          <ProductDetail type="cart" id_prop={infor.id} />
        </div>
      </Modal>
    </>
  );
};

export default CompartmentItem;
