import React from "react";
import ProductDetail from "../components/ProductDetail";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Navigate from "../components/Navigate";

const ProductDetailPage = () => {
  return (
    <div>
      <Navigate />
      <ProductDetail />
    </div>
  );
};

export default ProductDetailPage;
