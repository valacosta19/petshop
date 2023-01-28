import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";
import styled from "styled-components";

interface childrenProp {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FC<childrenProp> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
