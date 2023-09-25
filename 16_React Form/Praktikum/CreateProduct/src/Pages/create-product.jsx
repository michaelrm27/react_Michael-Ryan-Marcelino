import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useProductContext } from "./ProductContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  productName: z.string().min(1, { message: "Product Name Field Can't be Empty" }).max(25, { message: "Product name must not exceed 25 character" }),
  productCategory: z.string().min(1, { message: "Product Category field must be filled in" }),
  productImage: z.any().refine((val) => val.length > 0, "Product image field must be filled in"),
  productFreshness: z.string().min(1, { message: "Product freshness field must be filled in" }),
  productDesc: z.string().min(1, { message: "Additional Description field must be filled in" }),
  productPrice: z.string().min(1, { message: "Please enter a valid product price" }),
});

function handleRandomNumber() {
  const number = Math.random() * 10;
  return console.log(number);
}

export default function Form() {
  const navigate = useNavigate();
  const { tableData, addProduct, deleteProduct } = useProductContext();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    alert("Welcome");
  }, []);

  function handleDelete(index) {
    alert("Data Deleted");
    deleteProduct(index);
  }

  const onSubmit = (data) => {
    alert("Form Submitted");
    addProduct(data);
    reset();
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="container ps-lg-5">
        <form action="" id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="fw-medium fs-3">Detail Product</div>
          <div className="mt-lg-4">
            <label htmlFor="" className="form-label">
              Product Name
            </label>
            <input {...register("productName")} type="text" className="form-control" id="productname" style={{ width: 280 }} />
            {errors.productName?.message && <div className="text-danger">{errors.productName?.message}</div>}
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Category
            </label>
            <select className="form-select" name="" id="productcategory" style={{ width: 280 }} {...register("productCategory")}>
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
            {errors.productCategory?.message && <div className="text-danger">{errors.productCategory?.message}</div>}
          </div>
          <div className="mt-lg-5 mb-lg-4">
            <label htmlFor="formFile" className="form-label">
              Image of Product
            </label>
            <input className="form-control" type="file" id="formFile" style={{ width: 280 }} {...register("productImage")} />
            {errors.productImage?.message && <div className="text-danger">{errors.productImage?.message}</div>}
          </div>
          <div className="">
            <label htmlFor="" className="form-label">
              Product Freshness
            </label>
          </div>
          <div className="form-check" name="formcheck" id="radio">
            <label className="form-check-label active">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="brandnew" {...register("productFreshness")} /> Brand New{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="secondhand" {...register("productFreshness")} /> Second Hand{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="refurbished" {...register("productFreshness")} /> Refurbished{" "}
            </label>
            {errors.productFreshness?.message && <div className="text-danger">{errors.productFreshness?.message}</div>}
          </div>
          <div className="mt-lg-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Additional Description
            </label>
            <textarea className="form-control w-50" id="textarea" rows={5} placeholder="Description of the product" defaultValue={""} {...register("productDesc")} />
            {errors.productDesc?.message && <div className="text-danger">{errors.productDesc?.message}</div>}
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Price
            </label>
          </div>
          <div className="input-group mb-3 w-50">
            <input type="text" className="form-control" id="productprice" aria-label="Amount (to the nearest dollar)" placeholder="$" {...register("productPrice")} />
          </div>
          {errors.productPrice?.message && <div className="text-danger">{errors.productPrice?.message}</div>}
          <div className="d-flex justify-content-center mt-lg-5">
            <button className="btn btn-primary w-50" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center gap-3 mt-lg-5">
          <button className="btn btn-dark" type="button" onClick={handleRandomNumber}>
            Random Number
          </button>
          <button className="btn btn-dark" onClick={() => navigate("/landing-page")}>
            Landing Page
          </button>
        </div>
        <div className="container table mt-lg-5">
          <table className="table table-striped-columns" id="tableinput">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.productName}</td>
                  <td>{data.productCategory}</td>
                  <td>{data.productFreshness}</td>
                  <td>{data.productPrice}</td>
                  <td>
                    <Link to={`/detail/${index + 1}`} className="btn btn-primary btn-sm me-1">
                      Detail
                    </Link>
                    <button className="btn btn-danger btn-sm me-1" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                    <button className="btn btn-primary btn-sm">Edit</button>
                  </td>
                </tr>
              ))}
              ;
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
