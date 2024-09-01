import { Skeleton } from "antd";
const ProductSkeleton = () => {
  return (
    <div className="space-y-2 flex flex-col sm:w-1/3 w-1/2 md:w-1/5">
      <Skeleton.Image active style={{ width: "100%", height: 150 }} />
      <Skeleton paragraph active />
    </div>
  );
};

export default ProductSkeleton;
