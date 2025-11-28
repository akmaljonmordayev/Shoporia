import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
function LayOut({ children }) {
  return (
    <>
      <Header />
      <div className="">
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
}

export default LayOut;
