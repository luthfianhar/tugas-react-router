import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Customer from "./Customer.jsx";
import Sellers from "./Sellers.jsx"; 
import Data from "./Data.jsx";
import DataLayout from "./DataLayout.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Image from "./Image.jsx";
import NotFound from "./NotFound.jsx";
import ProductSearch from "./ProductSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images/*" element={<Image />} />
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="products" element={<Product />} />
          <Route path="products/search" element={<ProductSearch />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="customers" element={<Customer />} />
          <Route path="sellers" element={<Sellers />} />
        </Route>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);