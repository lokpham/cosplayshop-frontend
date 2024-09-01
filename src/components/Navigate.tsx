import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const Navigate = ({ item }: { item: ItemType[] }) => {
  return (
    <div className="p-2">
      <Breadcrumb className="" items={item} />
    </div>
  );
};

export default Navigate;
