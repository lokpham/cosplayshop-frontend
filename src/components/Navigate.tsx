import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <div className="p-2">
      <Breadcrumb
        className=""
        items={[
          {
            title: <Link to={"/"}>Home</Link>,
          },
          {
            title: <a href="">Sản phẩm</a>,
          },
          {
            title: <a href="">adas asd asd</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
    </div>
  );
};

export default Navigate;
