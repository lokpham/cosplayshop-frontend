import { Drawer, Menu, MenuProps } from "antd";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    label: <Link to={"/"}>Trang chủ</Link>,
  },
  {
    key: "sub1",
    label: "Danh mục",
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
    ],
  },
  {
    key: "sub2",
    label: <Link to={"/cosplayer"}>Cosplayer</Link>,
  },
  {
    key: "2",
    label: <Link to={"/news"}>Tin tức</Link>,
  },
];
const MenuSide = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    switch (e.key) {
      case "1":
        break;

      default:
        break;
    }
    setOpen(false);
  };
  return (
    <div>
      <div className="md:hidden flex justify-between items-center ">
        <RiMenu2Fill
          onClick={() => setOpen(true)}
          className="text-white text-[2rem] cursor-pointer"
        />
        <Link className="btn-login" to={"login"}>
          ĐĂNG NHẬP
        </Link>
      </div>
      <Drawer placement="left" onClose={onClose} open={open}>
        <Menu
          onClick={onClick}
          selectedKeys={[]}
          style={{ width: "100%" }}
          mode="inline"
          items={items}
        />
      </Drawer>
    </div>
  );
};

export default MenuSide;
