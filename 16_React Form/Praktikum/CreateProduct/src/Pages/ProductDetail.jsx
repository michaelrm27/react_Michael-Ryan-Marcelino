import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./ProductContext";

export default function Detail() {
  const { id } = useParams();
  const { tableData } = useProductContext();
  const product = tableData[id - 1];

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product Name: {product.productName} </p>
      <p>Product Category: {product.productCategory} </p>
      <p>Product Freshness: {product.productFreshness} </p>
      <p>Product Price: {product.productPrice} </p>
    </div>
  );
}
