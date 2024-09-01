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

const ProductOption = ({
  data,
  handleSelectOption,
  current_product_item,
  priority,
  filterData,
}: any) => {
  function checkExisted(products: any, item: any) {
    if (priority == 1) {
      return true;
    }
    // Iterate through each product
    for (const product of products) {
      // Check if "XXL" is in the variants array
      if (product.variants.includes(item)) {
        return true; // "XXL" found
      }
    }
    return false; // "XXL" not found
  }
  console.log(current_product_item);
  return (
    <div>
      <p className="font-semibold">{data.name}:</p>
      <div className="flex gap-2">
        {data.values
          .sort((a: any, b: any) => a.localeCompare(b))
          .map((item: any, index: any) => {
            if (filterData != null) {
              if (checkExisted(filterData, item)) {
                return (
                  <div
                    onClick={() => handleSelectOption(item, priority)}
                    className={`hover:ring-red-400 ${
                      current_product_item?.variants?.includes(item)
                        ? "ring-red-500 "
                        : ""
                    }hover:shadow-md cursor-pointer sm:text-[1rem] text-[0.8rem] p-1 min-w-[40px] text-center ring-1 ring-gray-300`}
                    key={index}
                  >
                    {item}
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="bg-gray-300 opacity-35 sm:text-[1rem] text-[0.8rem] p-1 min-w-[40px] text-center ring-1 ring-gray-300"
                  >
                    {item}
                  </div>
                );
              }
            }
          })}
      </div>
    </div>
  );
};

export default ProductOption;
