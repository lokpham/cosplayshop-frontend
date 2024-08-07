import { Image } from "antd";
import React from "react";
import PriceDiscount from "./PriceDiscount";
import { GiFlowerStar } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
const fake_data = {
  id: 1,
  image:
    "https://product.hstatic.net/1000273792/product/a0_af7b238cf02643bc89c1044f4215bb14_large.jpg",
  name: "Lorema djalksdjsaljd lajsld jasl dasld asd ",
  price: 130000,
  discount: 120000,
  quantity: 10,
};
const ProductDetail = ({ infor }: any) => {
  return (
    <div>
      <div className="flex gap-2">
        <div>
          <Image
            className="max-w-[500px] max-h-[600px]"
            src={fake_data.image}
            alt="product_img"
            placeholder={
              <Image
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                width={200}
              />
            }
          />
        </div>
        <div className="space-y-4">
          <p className="font-semibold text-responsive">{fake_data.name}</p>
          <PriceDiscount
            price={fake_data.price}
            discount={fake_data.discount}
          />
          <div>
            <p className="space-x-2">
              <GiFlowerStar className="inline-block" />
              <span>Mã sản phẩm: {fake_data.id}</span>
            </p>
            <p className="space-x-2">
              <FaBoxOpen className="inline-block" />
              <span>Tồn kho: {fake_data.quantity}</span>
            </p>
          </div>
          <div>
            Số lượng:
            <input
              min={1}
              className="min-w-[30px] outline-none ring-1 ring-gray-400"
              type="number"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
