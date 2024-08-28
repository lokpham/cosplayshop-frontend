import { Dropdown, MenuProps, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { category } from "src/types/types";
import { convertDataToMenuAntd } from "src/utils/common";
let items: MenuProps["items"] = [
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
    name: "Tin tức",
    to: "/news",
  },
];

const Navbar = ({ data }: any) => {
  items = convertDataToMenuAntd(data);
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    console.log(`Click on item ${key}`);
    navigate("/category/" + key);
  };
  return (
    <ul className=" divide-x text-white md:flex hidden">
      {fakedata.map((item, index) => {
        return (
          <li key={index}>
            {item.items ? (
              <Dropdown menu={{ items, onClick }}>
                <a
                  className="divide-x px-6 py-2 hover:border-b-secondary-700 border-b-2 border-w hover:bor border-b-transparent"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {item.name}
                </a>
              </Dropdown>
            ) : (
              <Link
                className="divide-x px-6 py-2 hover:border-b-secondary-700 border-b-2 border-w hover:bor border-b-transparent"
                to={item.to}
              >
                {item.name}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
