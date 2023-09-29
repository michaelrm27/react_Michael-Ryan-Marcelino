import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "../../Utils/Redux/reducer/reducer";

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
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.product.products);
  const [editIndex, setEditIndex] = useState(null);

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

  function handleEdit(index) {
    const productToEdit = tableData[index];
    setEditIndex(index);
    reset({
      productName: productToEdit.productName,
      productCategory: productToEdit.productCategory,
      productFreshness: productToEdit.productFreshness,
      productPrice: productToEdit.productPrice,
      productImage: productToEdit.productImage,
      productDesc: productToEdit.productDesc,
    });
  }

  const onSubmit = (data) => {
    if (editIndex !== null) {
      dispatch(
        editProduct({
          index: editIndex,
          updateProduct: {
            productName: data.productName,
            productCategory: data.productCategory,
            productFreshness: data.productFreshness,
            productPrice: data.productPrice,
            productImage: data.productImage,
            productDesc: data.productDesc,
          },
        })
      );
      setEditIndex(null);
    } else {
      dispatch(addProduct(data));
    }
    alert("Form Submitted");
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
              <option value="Phone">Phone</option>
              <option value="Laptop">Laptop</option>
              <option value="Router">Router</option>
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
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="Brand New" {...register("productFreshness")} /> Brand New{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="Second Hand" {...register("productFreshness")} /> Second Hand{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="Refurbished" {...register("productFreshness")} /> Refurbished{" "}
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
                <th scope="col">Product Image</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Description</th>
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
                  <td>{data.productImage}</td>
                  <td>{data.productFreshness}</td>
                  <td>{data.productDesc}</td>
                  <td>{data.productPrice}</td>
                  <td>
                    <Link to={`/detail/${index + 1}`} className="btn btn-primary btn-sm me-1">
                      Detail
                    </Link>
                    <button className="btn btn-danger btn-sm me-1" onClick={() => dispatch(deleteProduct(index))}>
                      Delete
                    </button>
                    <button className="btn btn-primary btn-sm" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
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
