import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function LayOut({ children }) {
  return (
    <>
      <Header />
      <div className="pt-24">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default LayOut;
