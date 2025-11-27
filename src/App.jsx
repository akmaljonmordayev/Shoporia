import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
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
const Profile = React.lazy(() =>
  import("./features/shop/pages/Profile/Profile")
);
const PersonalData = React.lazy(() =>
  import("./features/shop/pages/PersonalData/PersonalData")
);
const PaymentInstalments = React.lazy(() =>
  import("./features/shop/pages/PaymentInstalments/PaymentInstalments")
);
const Orders = React.lazy(() => import("./features/shop/pages/Orders/Orders"));
const WishList = React.lazy(() => import("./features/shop/pages/WishList/WishList"));
const Discounts = React.lazy(() => import("./features/shop/pages/Discounts/Discounts"));
const SecurityAccess = React.lazy(() =>
  import("./features/shop/pages/SecurityAccess/SecurityAccess")
);
const Notification = React.lazy(() =>
  import("./features/shop/pages/Notification/Notification")
);

import ProfileLayout from "./features/shop/components/SideBar/ProfileLayout";
import Skeleton from "./features/shop/Skeleton/Skeleton";

function App() {
  return (
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

        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path="personal-data" element={<PersonalData />} />
          <Route path="payment-instalments" element={<PaymentInstalments />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wish-list" element={<WishList />} />
          <Route path="discounts" element={<Discounts />} />
          <Route path="security-access" element={<SecurityAccess />} />
          <Route path="notification" element={<Notification />} />
        </Route>

        <Route
          path="*"
          element={
            <LayOut>
              <NotFound />
            </LayOut>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
