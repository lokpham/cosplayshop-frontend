import React from "react";

const PriceDiscount = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  return (
    <div className="space-x-2">
      {discount == 0 ? (
        <span className="text-red-500 my-2">
          {price.toLocaleString("en-US")} đ
        </span>
      ) : (
        <>
          <span className="text-red-500 my-2">
            {discount.toLocaleString("en-US")} đ
          </span>
          <span>-</span>
          <span className="line-through text-gray-400">
            {price.toLocaleString("en-US")} đ
          </span>
        </>
      )}
    </div>
  );
};

export default PriceDiscount;
