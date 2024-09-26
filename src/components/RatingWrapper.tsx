import { Modal, notification } from "antd";
import { useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import usePost from "src/api/usePost";
import { authentication_action } from "src/atoms/myAtom";
import Button from "src/components/Button";
const RatingWrapper = ({
  rate_prop,
  product_id,
}: {
  rate_prop: any;
  product_id: any;
}) => {
  console.log(rate_prop);
  const authentication = useAtomValue(authentication_action.getUser);
  const [api, contextHolder] = notification.useNotification();
  const { data, loading, error, postData }: any = usePost("/product/rate");

  const openNotification = (type: "success" | "error", message?: string) => {
    api.open({
      message: "Thông báo",
      description: message,
      duration: 2,
      showProgress: true,
      type: type,
      placement: "bottomRight",
    });
  };
  const [open, setOpen] = React.useState<boolean>(false);
  const [rate, setRate] = useState<number>(-1);
  const showLoading = () => {
    if (authentication.isLogged) {
      setOpen(true);
    } else {
      openNotification("error", "Chưa đăng nhập");
    }
  };
  const handleAddCart = () => {
    setOpen(false);
    openNotification("success", "Thêm thành công");
  };
  const handleRate = async () => {
    await postData({
      user_id: 23,
      product_id: parseInt(product_id),
      value: rate + 1,
    });
    openNotification("success", "Đánh thành công");
    setOpen(false);
  };

  const [current, setCurrent] = useState(3);
  return (
    <>
      <div className="flex gap-2  flex-wrap text-[2rem] text-gray-400 items-center">
        {[...Array(5)].map((item, index) => {
          return (
            <MdStarRate
              key={index}
              className={`${
                index + 1 <= rate_prop.avg_rate ? "text-yellow-400" : ""
              }`}
            />
          );
        })}
        <span className="text-[1rem]">
          ({rate_prop.total}{" "}
          <button
            onClick={showLoading}
            className="underline hover:text-secondary-500"
          >
            đánh giá
          </button>
          )
        </span>
      </div>
      <Modal
        title={"Đánh giá"}
        footer={
          <Button
            isLoading={loading}
            onClick={handleRate}
            type_button="secondary"
            size="small"
          >
            {loading || "OK"}
          </Button>
        }
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="flex gap-2 ">
          {[...Array(5)].map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setRate(index)}
                className={`p-2 select-none cursor-pointer hover:text-white  hover:bg-secondary-500 border-secondary border-2 ${
                  rate == index ? "bg-secondary text-white" : ""
                }`}
              >
                {index + 1} Sao
              </div>
            );
          })}
        </div>
      </Modal>
      {contextHolder}
    </>
  );
};

export default RatingWrapper;
