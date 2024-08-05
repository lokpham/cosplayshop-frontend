import React from "react";
import { Badge, Button, Card, Space } from "antd";
import { MdAddShoppingCart } from "react-icons/md";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
const CompartmentItem = () => {
  return (
    <div className=" select-none flex flex-col p-2 hover:shadow-lg transition-shadow">
      <Badge.Ribbon text="Hippies" color="pink">
        <div
          className="w-full 
         overflow-hidden"
        >
          <img
            draggable="false"
            src="https://product.hstatic.net/1000273792/product/a0_af7b238cf02643bc89c1044f4215bb14_large.jpg"
            alt=""
          />
        </div>
      </Badge.Ribbon>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore,
          inventore, ipsam facere
        </p>
        <p className="text-red-500 my-2">120,000 đ</p>
        <div className="space-x-2 w-fit ml-auto">
          <Button type="default" shape="default" icon={<MdAddShoppingCart />}>
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
    </div>
  );
};

export default CompartmentItem;
