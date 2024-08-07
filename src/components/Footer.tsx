import React from "react";
import { Link } from "react-router-dom";

const help_list = [
  {
    label: "Hướng dẫn mua sản phẩm",
    to: "/help",
  },
  {
    label: "Chính sách bảo mật",
    to: "/help",
  },
];
const Footer = () => {
  return (
    <div className=" text-white shadow-md  bg-secondary">
      <div className="flex justify-evenly container mx-auto p-2">
        <ul className="list-disc">
          OUTFITME
          <li>786A Hà Hoàng Hổ - Long Xuyên</li>
          <li> SĐT: 0909.128.323</li>
          <li>Thời gian làm việc : 9h - 20h</li>
        </ul>
        <ul className="list-decimal">
          Hỗ trợ
          {help_list.map((item, index) => {
            return (
              <li key={index}>
                <Link className="hover:text-sky-700" key={index} to={item.to}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
