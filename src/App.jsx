import "./App.css";
import LayOut from "./features/shop/components/layOut/LayOut";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Not_Found/Not_Found";
import React from "react";
import Product from "./features/shop/pages/Products/Product";
import Faq from "./features/shop/pages/FAQ/Faq";
import Home from "./features/shop/pages/Home/Home";
import Blog from "./features/shop/pages/Blog/Blog";
import ContactUs from "./features/shop/pages/ContactUs/ContactUs";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LayOut>
              <Home />
            </LayOut>
          }
        ></Route>
        <Route
          path="*"
          element={
            <LayOut>
              <NotFound />
            </LayOut>
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <LayOut>
              <Blog />
            </LayOut>
          }
        ></Route>
        <Route
          path="/faq"
          element={
            <LayOut>
              <Faq />
            </LayOut>
          }
        ></Route>
        <Route
          path="/product"
          element={
            <LayOut>
              <Product />
            </LayOut>
          }
        ></Route>
        <Route
          path="/contact-us"
          element={
            <LayOut>
              <ContactUs />
            </LayOut>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
