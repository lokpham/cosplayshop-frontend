import { Empty, Image } from "antd";
import { useAtomValue, useSetAtom } from "jotai";
import { Link } from "react-router-dom";
import { cart_atom } from "src/atoms/myAtom";
import Button from "src/components/Button";
import CartItem from "src/components/CartItem";
import InputQuantity from "src/components/InputQuantity";
import Navigate from "src/components/Navigate";

const CartDetailList = () => {
  const data: any = useAtomValue(cart_atom.getAllCart);
  const deleteCartItem = useSetAtom(cart_atom.deleteCartItem);
  const handleDeleteCartItem = (id: number) => {
    deleteCartItem(id);
  };
  return (
    <>
      <Navigate
        item={[
          {
            title: <Link to={"/"}>Trang chủ</Link>,
          },

          {
            title: "Giỏ hàng",
          },
        ]}
      />
      <div className="p-2">
        {" "}
        {data.list.length > 0 ? (
          data.list.map((item: any, index: number) => {
            return (
              <div className="flex gap-2 my-2">
                <div>
                  <Image width={70} height={70} src={item.image} alt="" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>Giá: {item.price.toLocaleString("en-US")} đ</p>
                  <p>
                    Tổng: {(item.price * item.quantity).toLocaleString("en-US")}{" "}
                    đ
                  </p>
                  <p>Số lượng: {item.quantity}</p>
                  <div className="flex gap-2 mt-2">
                    <Button size="small" type_button="link">
                      Sửa
                    </Button>
                    <Button
                      onClick={() => handleDeleteCartItem(item.id)}
                      size="small"
                    >
                      Xóa
                    </Button>
                  </div>
                </div>
              </div>
              // <CartItem
              //   key={index}
              //   id={item.id}
              //   quantity={item.quantity}
              //   name={item.name}
              //   price={item.price}
              //   image={item.image}
              //   discount={item.discount}
              // />
            );
          })
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
};

export default CartDetailList;
