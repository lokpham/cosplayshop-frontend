import ProductDetail from "../components/ProductDetail";
import Navigate from "../components/Navigate";
import CommentWrapper from "src/components/CommentWrapper";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  return (
    <div>
      <Navigate
        item={[
          {
            title: <Link to={"/"}>Trang chủ</Link>,
          },
          {
            title: <a href="/products">Sản phẩm</a>,
          },
          {
            title: "Chi tiết sản phẩm",
          },
        ]}
      />
      <ProductDetail type="detail" />
      <CommentWrapper />
    </div>
  );
};

export default ProductDetailPage;
