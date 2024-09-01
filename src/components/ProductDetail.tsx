import { Image, notification } from "antd";
import React, { useEffect, useState } from "react";
import PriceDiscount from "./PriceDiscount";
import { GiFlowerStar } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import InputQuantity from "./InputQuantity";
import ProductOption from "./ProductOption";
import Button from "src/components/Button";
import RatingWrapper from "src/components/RatingWrapper";
import useFetch from "src/api/useFetch";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { cart_atom } from "src/atoms/myAtom";

const ProductDetail = ({
  type = "detail",
  id_prop,
}: {
  type: "cart" | "detail";
  id_prop?: number;
}) => {
  const [, setListcart] = useAtom(cart_atom.addCart);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Thông báo",
      description: "Thêm thành công",
      duration: 2,
      showProgress: true,
      type: "success",
      placement: "bottomRight",
    });
  };
  const { id } = useParams();

  const { data, loading }: any = useFetch(
    "/product/details/" + (id || id_prop)
  );
  const [select, setSelect]: any = useState(null);
  const [filterData, setFilterData]: any = useState(null);
  const handleSelectOption = (value: any, priority: any) => {
    if (priority == 1) {
      const new_product_items = data.product_items.filter((product: any) => {
        return product.variants[priority - 1] == value;
      });
      setFilterData(new_product_items);
      setSelect(new_product_items?.[0]);
    } else {
      if (filterData != null) {
        const new_product_items = filterData.filter((product: any) => {
          return product.variants[priority - 1] == value;
        });
        setSelect(new_product_items?.[0]);
      }
    }
  };
  useEffect(() => {
    if (!loading) {
      // priority từ 1 - n
      handleSelectOption(data.variants[0].values[0], data.variants[0].priority);
    }
  }, [data]);
  if (loading) {
    return loading;
  }
  console.log(filterData);
  return (
    <div className=" overflow-y-auto p-2">
      <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 items-start">
        <div>
          <Image
            wrapperClassName="lg:w-[500px] md:w-[300px] w-[200px] shrink-0"
            src={select?.image || data.product.image}
            alt="product_img"
          />
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <div className="flex gap-2 flex-wrap">
              <div className="border-2">
                <Image
                  wrapperClassName="md:w-[90px] w-[40px] sm:w-[60px]"
                  src={data.product.image}
                  alt="product_img"
                />
              </div>
              {data.product_items
                .filter(
                  (item: any, index: any, self: any) =>
                    index === self.findIndex((t: any) => t.image === item.image)
                )
                .map((item: any) => {
                  return (
                    <div key={item.id} className="border-2">
                      <Image
                        wrapperClassName="md:w-[90px] w-[40px] sm:w-[60px]"
                        src={item.image}
                      />
                    </div>
                  );
                })}
            </div>
          </Image.PreviewGroup>
          {type && <RatingWrapper />}
        </div>
        <div className="space-y-4">
          <p className="font-semibold text-responsive">{data.product.name}</p>
          <div className="text-responsive">
            <PriceDiscount
              price={select?.price || 0}
              discount={select?.discount || 0}
            />
          </div>

          <ul className="list-disc text-[1rem]">
            <li className="space-x-2 ml-6">
              <span className="font-semibold">Mã sản phẩm:</span>
              <span> {select?.sku || "unknown"}</span>
            </li>
            <li className="space-x-2 ml-6">
              <span className="font-semibold">Tồn kho:</span>
              <span> {select?.stock || 0}</span>
            </li>
            {data.product.description && (
              <li className="space-x-2 ml-6">
                <span className="font-semibold">Mô tả:</span>
                <span className="text-[1rem]"> {data.product.description}</span>
              </li>
            )}
          </ul>
          {/* Đã sort theo priority */}
          {data.variants.map((item: any) => {
            return (
              <ProductOption
                key={item.id}
                data={item}
                priority={item.priority}
                handleSelectOption={handleSelectOption}
                current_product_item={select}
                filterData={filterData}
              />
            );
          })}
          <InputQuantity />

          <div className="space-x-2">
            {type == "detail" ? (
              <Button icon={<FaShoppingCart />}>Mua</Button>
            ) : (
              ""
            )}
            <Button
              onClick={() =>
                setListcart({
                  ...select,
                  name: data.product.name + " | " + select.sku,
                })
              }
              icon={<FaCartPlus />}
            >
              Thêm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
