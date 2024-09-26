import { Empty, Image, notification } from "antd";
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
import Tag from "src/components/Tag";
import CommentWrapper from "src/components/CommentWrapper";

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
  const [quantity, setQuantity] = useState<number>(1);
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
      if (data.variants.length > 0) {
        handleSelectOption(
          data.variants[0].values[0],
          data.variants[0].priority
        );
      } else {
        setSelect(data.product_items[0]);
      }
    }
  }, [data]);
  if (loading) {
    return loading;
  }
  if (!loading && !data) {
    return (
      <div>
        <Empty description="Không tồn tại sản phẩm" />
      </div>
    );
  }
  return (
    <>
      <div className=" overflow-y-auto p-2">
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 items-start">
          <div>
            <Image
              wrapperClassName="lg:w-[400px] sm:w-[300px] w-[200px] shrink-0"
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
                <div>
                  <Image
                    wrapperClassName="md:size-[90px] size-[40px] sm:size-[60px] block border-2"
                    src={data.product.image}
                    alt="product_img"
                  />
                </div>
                {data.product_items
                  .filter(
                    (item: any, index: any, self: any) =>
                      index ===
                      self.findIndex((t: any) => t.image === item.image)
                  )
                  .map((item: any) => {
                    if (!item.image) {
                      return "";
                    } else {
                      return (
                        <div key={item.id}>
                          <Image
                            wrapperClassName="md:size-[90px] size-[40px] sm:size-[60px] block border-2"
                            src={item.image}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
            </Image.PreviewGroup>
            {type && select && (
              <RatingWrapper
                product_id={data.product.id}
                rate_prop={data.product.rate}
              />
            )}
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
                  <span className="text-[1rem]">
                    {" "}
                    {data.product.description}
                  </span>
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
            <InputQuantity
              stock={select?.stock}
              quantity={quantity}
              setQuantity={setQuantity}
            />

            <div className="space-x-2">
              {type == "detail" ? (
                <Button icon={<FaShoppingCart />}>Mua</Button>
              ) : (
                ""
              )}
              <Button
                onClick={() => {
                  setListcart({
                    ...select,
                    image: select.image || data.product.image,
                    name:
                      data.product.name +
                      " | " +
                      select.sku +
                      " | " +
                      select.variants.join(" / "),
                    quantity: quantity,
                  });
                  openNotification();
                }}
                icon={<FaCartPlus />}
              >
                Thêm
              </Button>
            </div>
            {data.product.tags && (
              <div className="">
                Tags:
                {data.product.tags.split("|").map((item: any) => {
                  return <Tag tag={item} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      {contextHolder}
      <CommentWrapper />
    </>
  );
};

export default ProductDetail;
