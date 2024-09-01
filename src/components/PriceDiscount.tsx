import React from "react";

const PriceDiscount = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  return (
    <div className="space-x-2 text-[1rem]">
      {discount == 0 ? (
        <span className="text-red-500">
          {price.toLocaleString("en-US") + "đ"}
        </span>
      ) : (
        <div className="flex flex-wrap gap-2">
          <div className="text-red-500">
            {discount.toLocaleString("en-US") + " đ"}
          </div>
          <div className="hidden sm:inline">-</div>
          <div className="line-through text-gray-400">
            {price.toLocaleString("en-US") + " đ"}
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDiscount;
