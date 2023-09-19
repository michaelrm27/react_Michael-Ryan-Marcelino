import React, { useEffect, useState } from "react";

function handleRandomNumber() {
  const number = Math.random() * 10;
  return console.log(number);
}

export default function Form({ addData }) {
  const [productName, setProductName] = useState("");
  const [productcategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const [errors, setErrors] = useState({
    productName: "",
    productcategory: "",
    productImage: "",
    productFreshness: "",
    productDesc: "",
    productPrice: "",
  });

 

  function handleValidation() {
    const newErrors = {
      productName: "",
      productcategory: "",
      productImage: "",
      productFreshness: "",
      productDesc: "",
      productPrice: "",
    };

    if (productName.length == 0) {
      newErrors.productName = "Product Name Field Can't be Empty";
    } else if (productName.length > 25) {
      newErrors.productName = "Product name must not exceed 25 character";
    } else if (productName.match(specialchars)) {
      newErrors.productName = "Prodcut name must not contain symbols";
    } else if (productcategory.length == 0) {
      newErrors.productcategory = "Product Category field must be filled in";
    } else if (productImage.length == 0) {
      newErrors.productImage = "Product image field must be filled in";
    } else if (productFreshness.length == 0) {
      newErrors.productFreshness = "Product freshness field must be filled in";
    } else if (productDesc.length == 0) {
      newErrors.productDesc = "Additional Description field must be filled in";
    } else if (productPrice.length == 0) {
      newErrors.productPrice = "Please enter a valid product price";
    }
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return false;
    } else {
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!handleValidation()) {
      return;
    } else {
      alert("form Submitted");
      const newData = {
        productName: productName,
        productCategory: productcategory,
        productImage: productImage,
        productFreshness: productFreshness,
        productDesc: productDesc,
        productPrice: productPrice,
      };

      const tableBody = document.getElementById("tablebody");
      const newRow = tableBody.insertRow();

      const cellIndex = newRow.insertCell(0);
      const cellName = newRow.insertCell(1);
      const cellCategory = newRow.insertCell(2);
      const cellImage = newRow.insertCell(3);
      const cellFreshness = newRow.insertCell(4);
      const cellDescription = newRow.insertCell(5);
      const cellPrice = newRow.insertCell(6);

      cellIndex.innerHTML = tableBody.rows.length;
      cellName.innerHTML = productName;
      cellCategory.innerHTML = productcategory;
      cellImage.innerHTML = `<img src="${productImage}" alt="${productName}" width="50">`;
      cellFreshness.innerHTML = productFreshness;
      cellDescription.innerHTML = productDesc;
      cellPrice.innerHTML = productPrice;

      setProductName("");
      setProductCategory("");
      setProductImage("");
      setProductFreshness("");
      setProductDesc("");
      setProductPrice("");

      event.target.reset();
    }
  }

  return (
    <>
      <div className="container ps-lg-5">
        <form action="" id="form" onSubmit={handleSubmit}>
          <div className="fw-medium fs-3">Detail Product</div>
          <div className="mt-lg-4">
            <label htmlFor="" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productname"
              style={{ width: 280 }}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            {errors.productName && <div className="text-danger">{errors.productName}</div>}
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Category
            </label>
            <select
              className="form-select"
              name=""
              id="productcategory"
              style={{ width: 280 }}
              onChange={(e) => {
                setProductCategory(e.target.value);
              }}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
            {errors.productcategory && <div className="text-danger">{errors.productcategory}</div>}
          </div>
          <div className="mt-lg-5 mb-lg-4">
            <label htmlFor="formFile" className="form-label">
              Image of Product
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              style={{ width: 280 }}
              onChange={(e) => {
                setProductImage(e.target.value);
              }}
            />
            {errors.productImage && <div className="text-danger">{errors.productImage}</div>}
          </div>
          <div className="">
            <label htmlFor="" className="form-label">
              Product Freshness
            </label>
          </div>
          <div className="form-check" name="formcheck" id="radio">
            <label className="form-check-label active">
              {" "}
              <input
                className="form-check-input"
                type="radio"
                name="Freshness"
                defaultValue="brandnew"
                onChange={(e) => {
                  setProductFreshness(e.target.value);
                }}
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
                defaultValue="secondhand"
                onChange={(e) => {
                  setProductFreshness(e.target.value);
                }}
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
                defaultValue="refurbished"
                onChange={(e) => {
                  setProductFreshness(e.target.value);
                }}
              />{" "}
              Refurbished{" "}
            </label>
            {errors.productFreshness && <div className="text-danger">{errors.productFreshness}</div>}
          </div>
          <div className="mt-lg-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Additional Description
            </label>
            <textarea
              className="form-control w-50"
              id="textarea"
              rows={5}
              placeholder="Description of the product"
              defaultValue={""}
              onChange={(e) => {
                setProductDesc(e.target.value);
              }}
            />
            {errors.productDesc && <div className="text-danger">{errors.productDesc}</div>}
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
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
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
            />
          </div>
          {errors.productPrice && <div className="text-danger">{errors.productPrice}</div>}
          <div className="d-flex justify-content-center mt-lg-5">
            <button className="btn btn-primary w-50" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center mt-lg-5">
          <button className="btn btn-dark w-50" type="button" onClick={handleRandomNumber}>
            Random Number
          </button>
        </div>
        <div className="container table mt-lg-5">
          <table className="table table-striped-columns" id="tableinput">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Image of Product</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
            <tbody id="tablebody" />
          </table>
        </div>
      </div>
    </>
  );
}
