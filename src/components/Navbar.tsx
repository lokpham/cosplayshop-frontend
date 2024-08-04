import { Dropdown, MenuProps, Space } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Áo - Trang phục",
    children: [
      {
        key: "1-2",
        label: "Áo thun",
      },
      {
        key: "1-3",
        label: "Áo dài",
      },
    ],
  },
  {
    key: "2",
    label: "Móc khóa - Huy hiệu",
    children: [
      {
        key: "2-1",
        label: "Móc khóa dây",
      },
      {
        key: "2-2",
        label: "Móc khóa xâu",
      },
    ],
  },
];

const fakedata = [
  {
    name: "Trang chủ",
    to: "/",
  },
  {
    name: "Danh mục",
    to: "/catetory",
    items: items,
  },
  {
    name: "Cosplayer",
    to: "/cosplayer",
  },
  {
    name: "News",
    to: "/news",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    console.log(`Click on item ${key}`);
    navigate("/catetory");
  };
  return (
    <ul className="flex divide-x  text-white">
      {fakedata.map((item, index) => {
        return (
          <li
            key={index}
            className="divide-x px-6 py-2 hover:border-b-secondary-700 border-b-2 border-w hover:bor border-b-transparent"
          >
            {item.items ? (
              <Dropdown arrow menu={{ items, onClick }}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {item.name}
                </a>
              </Dropdown>
            ) : (
              <Link to={item.to}>{item.name}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
