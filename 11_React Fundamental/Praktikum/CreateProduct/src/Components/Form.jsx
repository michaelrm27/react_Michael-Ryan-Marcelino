import React, { useState } from "react";

export default function Form({ addData }) {
  const [productName, setProductName] = useState("");
  const [productcategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  function handleValidation() {
    if (productName.length == 0) {
      alert("Product Name Field Can't be Empty");
    } else if (productName.length > 25) {
      alert("Product name must not exceed 25 character");
    } else if (productName.match(specialchars)) {
      alert("Prodcut name must not contain symbols");
    } else if (productcategory.length == 0) {
      alert("Product Category field must be filled in");
    } else if (productImage.length == 0) {
      alert("Product image field must be filled in");
    } else if (productFreshness.length == 0) {
      alert("Product freshness field must be filled in");
    } else if (productDesc.length == 0) {
      alert("Additional Description field must be filled in");
    } else if (productPrice.length == 0) {
      alert("Please enter a valid product price");
    } else {
      return true;
    }
  }

  function handleSubmit(event) {
    if (!handleValidation()) {
      event.prefentDefault();
    } else {
      alert("Form Submitted");
      const newData = {
        productName:productName,
        productcategory:productcategory,
        productImage:productImage,
        productFreshness:productFreshness,
        productDesc:productDesc,
        productPrice:productPrice
      };
      addData(newData);
      setProductName('')
      setProductCategory('')
      setProductImage('')
      setProductFreshness('')
      setProductDesc('')
      setProductPrice('')

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
            <input type="text" className="form-control" id="productname" style={{ width: 280 }} onChange={(e) => setProductName(e.target.value)} />
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Category
            </label>
            <select className="form-select" name="" id="productcategory" style={{ width: 280 }} onChange={(e) => setProductCategory(e.target.value)}>
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
          </div>
          <div className="mt-lg-5 mb-lg-4">
            <label htmlFor="formFile" className="form-label">
              Image of Product
            </label>
            <input className="form-control" type="file" id="formFile" style={{ width: 280 }} onChange={(e) => setProductImage(e.target.value)} />
          </div>
          <div className="">
            <label htmlFor="" className="form-label">
              Product Freshness
            </label>
          </div>
          <div className="form-check" name="formcheck" id="radio">
            <label className="form-check-label active">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="brandnew" onChange={(e) => setProductFreshness(e.target.value)} /> Brand New{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="secondhand" onChange={(e) => setProductFreshness(e.target.value)} /> Second Hand{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="refurbished" onChange={(e) => setProductFreshness(e.target.value)} /> Refurbished{" "}
            </label>
          </div>
          <div className="mt-lg-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Additional Description
            </label>
            <textarea className="form-control w-50" id="textarea" rows={5} placeholder="Description of the product" defaultValue={""} onChange={(e) => setProductDesc(e.target.value)} />
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Price
            </label>
          </div>
          <div className="input-group mb-3 w-50">
            <input type="text" className="form-control" id="productprice" aria-label="Amount (to the nearest dollar)" placeholder="$" onChange={(e) => setProductPrice(e.target.value)} />
          </div>
          <div className="d-flex justify-content-center mt-lg-5">
            <button className="btn btn-primary w-50" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
