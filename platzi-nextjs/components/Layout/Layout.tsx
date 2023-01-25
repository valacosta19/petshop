import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";

interface childrenProp {
  children: React.ReactNode;
}

const Layout: React.FC<childrenProp> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
