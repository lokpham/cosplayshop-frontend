import React from "react";

const fake_data = {
  size: {
    label: "Kích thước",
    data: ["XL", "XXL", "L", "X"],
  },
  color: {
    label: "Màu",
    data: ["Red", "Blue", "Yellow", "Green"],
  },
};

const ProductOption = ({ type }: { type: "size" | "color" }) => {
  return (
    <div>
      <p className="font-semibold">{fake_data[type].label}:</p>
      <div className="flex gap-2">
        {fake_data[type].data.map((item, index) => {
          return (
            <div
              className="hover:ring-red-400 hover:shadow-md cursor-pointer p-1 min-w-[40px] text-center ring-1 ring-gray-300"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductOption;
