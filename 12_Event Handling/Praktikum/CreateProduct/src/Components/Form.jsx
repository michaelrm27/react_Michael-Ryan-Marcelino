import React from "react";

export default function Form() {
  return (
    <>
      <div className="container ps-lg-5">
        <form action="" id="form">
          <div className="fw-medium fs-3">Detail Product</div>
          <div className="mt-lg-4">
            <label htmlFor="" className="form-label">
              Product Name
            </label>
            <input type="text" className="form-control" id="productname" style={{ width: 280 }} />
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Category
            </label>
            <select className="form-select" name="" id="productcategory" style={{ width: 280 }}>
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
            <input className="form-control" type="file" id="formFile" style={{ width: 280 }} />
          </div>
          <div className="">
            <label htmlFor="" className="form-label">
              Product Freshness
            </label>
          </div>
          <div className="form-check" name="formcheck" id="radio">
            <label className="form-check-label active">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="brandnew" /> Brand New{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="secondhand" /> Second Hand{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input className="form-check-input" type="radio" name="Freshness" defaultValue="refurbished" /> Refurbished{" "}
            </label>
          </div>
          <div className="mt-lg-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Additional Description
            </label>
            <textarea className="form-control w-50" id="textarea" rows={5} placeholder="Description of the product" defaultValue={""} />
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Price
            </label>
          </div>
          <div className="input-group mb-3 w-50">
            <input type="text" className="form-control" id="productprice" aria-label="Amount (to the nearest dollar)" placeholder="$" />
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
