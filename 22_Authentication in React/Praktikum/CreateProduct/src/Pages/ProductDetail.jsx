import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./ProductContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Detail() {
  const { id } = useParams();
  const product = useSelector((state) => {
    const index = parseInt(id, 10) - 1;
    return state.product.products[index];
  });

  console.log(product);

  if (!product) {
    return <div className="justify-content-center text-center">Product Not Found</div>;
  }

  return (
    <div className="flex justify-content-center text-center">
      <h1>Product Detail</h1>
      <p>Product Name: {product.productName} </p>
      <p>Product Category: {product.productCategory} </p>
      <p>Product Image: {product.productImage} </p>
      <p>Product Freshness: {product.productFreshness} </p>
      <p>Product Description: {product.productDesc} </p>
      <p>Product Price: {product.productPrice} </p>
    </div>
  );
}
