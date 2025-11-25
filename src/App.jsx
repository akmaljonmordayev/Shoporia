import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./features/shop/components/layOut/LayOut";
import NotFound from "./components/Not_Found/Not_Found";
const Product = React.lazy(() =>
  import("./features/shop/pages/Products/Product")
);
const Faq = React.lazy(() => import("./features/shop/pages/FAQ/Faq"));
const Home = React.lazy(() => import("./features/shop/pages/Home/Home"));
const Blog = React.lazy(() => import("./features/shop/pages/Blog/Blog"));
const ContactUs = React.lazy(() =>
  import("./features/shop/pages/ContactUs/ContactUs")
);
const Register = React.lazy(() =>
  import("./features/shop/pages/Register/Register")
);
const Cart = React.lazy(() => import("./features/shop/pages/Cart/Cart"));
const About = React.lazy(() => import("./features/shop/pages/About/About"));
import ProtectedRoute from "./features/shop/components/ProtectedRoute/ProtectedRoute";
import Skeleton from "./features/shop/Skeleton/Skeleton";
function App() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route
            path="/"
            element={
              <LayOut>
                <Home />
              </LayOut>
            }
          />
          <Route
            path="*"
            element={
              <LayOut>
                <NotFound />
              </LayOut>
            }
          />
          <Route
            path="/blog"
            element={
              <LayOut>
                <Blog />
              </LayOut>
            }
          />
          <Route
            path="/faq"
            element={
              <LayOut>
                <Faq />
              </LayOut>
            }
          />
          <Route
            path="/product"
            element={
              <LayOut>
                <Product />
              </LayOut>
            }
          />
          <Route
            path="/contact-us"
            element={
              <LayOut>
                <ContactUs />
              </LayOut>
            }
          />
          <Route
            path="/cart"
            element={
              <LayOut>
                <Cart />
              </LayOut>
            }
          />
          <Route
            path="/register"
            element={
              <LayOut>
                <Register />
              </LayOut>
            }
          />
          <Route
            path="/about"
            element={
              <LayOut>
                <About />
              </LayOut>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
