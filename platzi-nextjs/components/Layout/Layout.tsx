import { Cart } from "@components/Cart/Cart";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";
import styled from "styled-components";

interface childrenProp {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  /* min-height: 100vh; */
  overflow: hidden;
`;

const Layout: React.FC<childrenProp> = ({ children }) => {
  return (
    <Container>
      <Cart />
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
