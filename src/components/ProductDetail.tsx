import { Image } from "antd";
import React from "react";
import PriceDiscount from "./PriceDiscount";
import { GiFlowerStar } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import InputQuantity from "./InputQuantity";
import ProductOption from "./ProductOption";
import Button from "src/components/Button";
import RatingWrapper from "src/components/RatingWrapper";
const fake_data = {
  id: 1,
  image:
    "https://product.hstatic.net/1000273792/product/a0_af7b238cf02643bc89c1044f4215bb14_large.jpg",
  name: "Lorema djalksdjsaljd lajsld jasl dasld asd ",
  price: 130000,
  discount: 120000,
  quantity: 10,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit quae, quaerat assumenda minima, mollitia ut, omnis quod possimus earum rerum sint? Ducimus nostrum soluta et. Deserunt deleniti ullam aliquam?",
};
const ProductDetail = ({
  infor,
  type,
}: {
  infor?: any;
  type?: "cart" | "detail";
}) => {
  return (
    <div className=" overflow-y-auto p-2">
      <div className="flex sm:flex-row flex-col gap-4 items-start">
        <div>
          <Image
            wrapperClassName="lg:w-[500px] md:w-[300px] w-[200px] shrink-0"
            src={fake_data.image}
            alt="product_img"
          />
          {type && <RatingWrapper />}
        </div>
        <div className="space-y-4">
          <p className="font-semibold text-responsive">{fake_data.name}</p>
          <div className="text-responsive">
            <PriceDiscount
              price={fake_data.price}
              discount={fake_data.discount}
            />
          </div>

          <ul className="list-disc text-[1rem]">
            <li className="space-x-2 ml-6">
              <span className="font-semibold">Mã sản phẩm:</span>
              <span> {fake_data.id}</span>
            </li>
            <li className="space-x-2 ml-6">
              <span className="font-semibold">Tồn kho:</span>
              <span> {fake_data.quantity}</span>
            </li>
            <li className="space-x-2 ml-6">
              <span className="font-semibold">Mô tả:</span>
              <span className="text-[1rem]"> {fake_data.description}</span>
            </li>
          </ul>
          <ProductOption type="color" />
          <ProductOption type="size" />
          <InputQuantity />
          {type && (
            <div className="space-x-2">
              <Button icon={<FaShoppingCart />}>Mua</Button>
              <Button icon={<FaCartPlus />}>Thêm</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
