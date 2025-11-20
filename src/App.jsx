import "./App.css";
import React from "react";
import LayOut from "./features/shop/components/layOut/LayOut";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Not_Found/Not_Found";
import Product from "./features/shop/pages/Products/Product";
import Faq from "./features/shop/pages/FAQ/Faq";
import Home from "./features/shop/pages/Home/Home";
import Blog from "./features/shop/pages/Blog/Blog";
import ContactUs from "./features/shop/pages/ContactUs/ContactUs";
import Register from "./features/shop/pages/Register/Register";
import Cart from "./features/shop/pages/Cart/Cart";
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
        <Route
          path="/cart"
          element={
            <LayOut>
              <Cart />
            </LayOut>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <LayOut>
              <Register />
            </LayOut>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
