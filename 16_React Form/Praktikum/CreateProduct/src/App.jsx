import { useState } from "react";
import "./App.css";
import Form from "./Pages/create-product";
import Page from "./Pages/landing-page";
import Detail from "./Pages/ProductDetail";
import { ProductProvider } from "./Pages/ProductContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(){
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/landing-page" element={<Page />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </ProductProvider>
    </Router>
  )
}
