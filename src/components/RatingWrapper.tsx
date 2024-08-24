import { Modal, notification } from "antd";
import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";
import Button from "src/components/Button";
const RatingWrapper = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Thông báo",
      description: "Đánh giá thành công",
      duration: 2,
      showProgress: true,
      type: "success",
      placement: "bottomRight",
    });
  };
  const [open, setOpen] = React.useState<boolean>(false);
  const [rate, setRate] = useState<number>(-1);
  const showLoading = () => {
    setOpen(true);
  };
  const handleAddCart = () => {
    setOpen(false);
    openNotification();
  };
  const [current, setCurrent] = useState(3);
  return (
    <>
      <div className="flex gap-2  flex-wrap text-[2rem] text-gray-400 items-center">
        {[...Array(5)].map((item, index) => {
          return (
            <MdStarRate
              key={index}
              className={`${index + 1 <= current ? "text-yellow-400" : ""}`}
            />
          );
        })}
        <span className="text-[1rem]">
          (230{" "}
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
          <Button onClick={handleAddCart} type="secondary" size="small">
            OK
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
