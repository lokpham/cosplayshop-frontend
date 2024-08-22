import ProductDetail from "../components/ProductDetail";
import Navigate from "../components/Navigate";
import CommentWrapper from "src/components/CommentWrapper";

const ProductDetailPage = () => {
  return (
    <div>
      <Navigate />
      <ProductDetail type="detail" />
      <CommentWrapper />
    </div>
  );
};

export default ProductDetailPage;
