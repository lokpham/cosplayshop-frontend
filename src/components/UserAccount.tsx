import { Dropdown, Image, MenuProps } from "antd";
import defaultavatar from "src/assets/user-default-avatar.jpg";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { authentication_action } from "src/atoms/myAtom";

const UserAccount = ({ data }: any) => {
  const [, setLogout] = useAtom(authentication_action.logout);
  const handleLogout = () => {
    console.log("logout");
    setLogout();
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={"/userinfor"} className="flex items-center gap-2">
          <FaUser />
          <span>Thông tin cá nhân</span>
        </Link>
      ),
      key: "0",
    },

    {
      type: "divider",
    },
    {
      label: (
        <div onClick={handleLogout} className="flex items-center gap-2 text-red-600">
          <IoIosLogOut /> <span >Đăng xuất</span>
        </div>
      ),
      key: "3",
    },
  ];
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Image
            width={50}
            height={50}
            className="rounded-full cursor-pointer"
            placeholder={defaultavatar}
            preview={false}
            src={data.picture}
            alt="user-avatar"
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default UserAccount;
