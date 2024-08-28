import { Drawer, Menu, MenuProps } from "antd";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { convertDataToMenuAntd } from "src/utils/common";
type MenuItem = Required<MenuProps>["items"][number];

const MenuSide = ({ data }: any) => {
  let items: MenuItem[] = [
    {
      key: "1",
      label: <Link to={"/"}>Trang chủ</Link>,
    },
    {
      key: "sub1",
      label: "Danh mục",
      children: convertDataToMenuAntd(data),
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
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    if (e.keyPath.includes("sub1")) {
      navigate("/category/" + e.key);
    }
    setOpen(false);
  };
  return (
    <div>
      <RiMenu2Fill
        onClick={() => setOpen(true)}
        className="text-white text-[2rem] cursor-pointer"
      />
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
