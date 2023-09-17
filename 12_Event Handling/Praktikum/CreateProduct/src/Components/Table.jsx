import React from "react";

export default function Table() {
  return (
    <>
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
    </>
  );
}
