import React, { Children } from "react";
import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const addProduct = (product) => {
    setTableData([...tableData, product]);
  };
  const deleteProduct = (index) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
  };

  return <ProductContext.Provider value={{ tableData, addProduct, deleteProduct }}>{children}</ProductContext.Provider>;
}
