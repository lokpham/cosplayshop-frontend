import ProductSkeleton from "src/components/ProductSkeleton";

const ProductListSkeleton = () => {
  return (
    <div className="m-2">
      <div className="gap-2 md:flex sm:hidden hidden">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
      <div className="gap-2 sm:flex md:hidden hidden">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
      <div className="flex gap-2 sm:hidden">
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    </div>
  );
};

export default ProductListSkeleton;
