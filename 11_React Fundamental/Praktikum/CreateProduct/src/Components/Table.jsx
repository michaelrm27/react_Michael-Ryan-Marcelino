import React from "react";

export default function Table({tableData}) {
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
          <tbody id="tablebody">
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.category}</td>
                <td>{data.image}</td>
                <td>{data.freshness}</td>
                <td>{data.desc}</td>
                <td>{data.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
