import React, { useEffect, useState, useRef } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

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
  const formRef = useRef(null);

  const [editIndex, setEditIndex] = useState(null);
  const [dataTable, setDataTable] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

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

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await axios.get("https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/products");
      setDataTable(result.data);
    } catch (error) {
      console.log("Error", error.toString());
    }
  }

  function handleEdit(index) {
    const productToEdit = dataTable[index];
    setEditIndex(index);
    reset({
      productName: productToEdit.productName,
      productCategory: productToEdit.productCategory,
      productFreshness: productToEdit.productFreshness,
      productPrice: productToEdit.productPrice,
      productImage: productToEdit.productImage,
      productDesc: productToEdit.productDesc,
    });
    setEditedProduct(productToEdit);
    setIsEditing(true);
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        const url = `https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/products/${editedProduct.id}`;
        const response = await axios.put(url, data);
        console.log("Response from server:", response.data);
        alert("Data Updated");
        fetchData();
      } else {
        const response = await axios.post("https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/products", data);
        console.log("Response from server:", response.data);
        setDataTable((dataTable) => [...dataTable, response.data]);
        alert("Form Submitted");
      }
      reset();
      setEditIndex(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Error", error);
    }
  };

  async function handleDelete(index) {
    try {
      const id = dataTable[index].id;
      const url = `https://651a7c97340309952f0d5fdb.mockapi.io/api/v1/products/${id}`;
      const response = await axios.delete(url);
      console.log("Response from server:", response.data);
      alert("Data Deleted");
      fetchData();
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="container ps-lg-5">
        <form
          action=""
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          aria-label="product-form"
          ref={formRef}
        >
          <div className="fw-medium fs-3">Detail Product</div>
          <div className="mt-lg-4">
            <label
              htmlFor=""
              className="form-label"
            >
              Product Name
            </label>
            <input
              {...register("productName")}
              type="text"
              className="form-control"
              id="productname"
              style={{ width: 280 }}
              aria-label="input-product-name"
            />
            {errors.productName?.message && <div className="text-danger">{errors.productName?.message}</div>}
          </div>
          <div className="mt-lg-5">
            <label
              htmlFor=""
              className="form-label"
            >
              Product Category
            </label>
            <select
              className="form-select"
              name=""
              id="productcategory"
              style={{ width: 280 }}
              {...register("productCategory")}
              aria-label="input-product-category"
            >
              <option
                selected=""
                disabled=""
                value=""
              >
                Choose...
              </option>
              <option value="Phone">Phone</option>
              <option value="Laptop">Laptop</option>
              <option value="Router">Router</option>
            </select>
            {errors.productCategory?.message && <div className="text-danger">{errors.productCategory?.message}</div>}
          </div>
          <div className="mt-lg-5 mb-lg-4">
            <label
              htmlFor="formFile"
              className="form-label"
            >
              Image of Product
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              style={{ width: 280 }}
              {...register("productImage")}
            />
            {errors.productImage?.message && <div className="text-danger">{errors.productImage?.message}</div>}
          </div>
          <div className="">
            <label
              htmlFor=""
              className="form-label"
              aria-label="product-freshness-radio"
            >
              Product Freshness
            </label>
          </div>
          <div
            className="form-check"
            name="formcheck"
            id="radio"
          >
            <label className="form-check-label active">
              {" "}
              <input
                className="form-check-input"
                type="radio"
                name="Freshness"
                defaultValue="Brand New"
                {...register("productFreshness")}
                aria-label="brandnew"
              />{" "}
              Brand New{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input
                className="form-check-input"
                type="radio"
                name="Freshness"
                defaultValue="Second Hand"
                {...register("productFreshness")}
                aria-label="secondhand"
              />{" "}
              Second Hand{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input
                className="form-check-input"
                type="radio"
                name="Freshness"
                defaultValue="Refurbished"
                {...register("productFreshness")}
                aria-label="refurbished"
              />{" "}
              Refurbished{" "}
            </label>
            {errors.productFreshness?.message && <div className="text-danger">{errors.productFreshness?.message}</div>}
          </div>
          <div className="mt-lg-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            >
              Additional Description
            </label>
            <textarea
              className="form-control w-50"
              id="textarea"
              rows={5}
              placeholder="Description of the product"
              defaultValue={""}
              {...register("productDesc")}
            />
            {errors.productDesc?.message && <div className="text-danger">{errors.productDesc?.message}</div>}
          </div>
          <div className="mt-lg-5">
            <label
              htmlFor=""
              className="form-label"
            >
              Product Price
            </label>
          </div>
          <div className="input-group mb-3 w-50">
            <input
              type="text"
              className="form-control"
              id="productprice"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$"
              {...register("productPrice")}
            />
          </div>
          {errors.productPrice?.message && <div className="text-danger">{errors.productPrice?.message}</div>}
          <div className="d-flex justify-content-center mt-lg-5">
            <button
              className="btn btn-primary w-50"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center gap-3 mt-lg-5">
          <button
            className="btn btn-dark"
            type="button"
            onClick={handleRandomNumber}
          >
            Random Number
          </button>
          <button
            className="btn btn-dark"
            onClick={() => navigate("/landing-page")}
          >
            Landing Page
          </button>
        </div>
        <div className="container table mt-lg-5">
          <table
            className="table table-striped-columns"
            id="tableinput"
          >
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
              {dataTable.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.productName}</td>
                  <td>{data.productCategory}</td>
                  <td>
                    <img
                      src={data.productImage}
                      alt=""
                      style={{ maxWidth: "50px" }}
                    />
                  </td>
                  <td>{data.productFreshness}</td>
                  <td>{data.productDesc}</td>
                  <td>{data.productPrice}</td>
                  <td>
                    <Link
                      to={`/detail/${index + 1}`}
                      className="btn btn-primary btn-sm me-1"
                    >
                      Detail
                    </Link>
                    <button
                      className="btn btn-danger btn-sm me-1"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(index)}
                    >
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
