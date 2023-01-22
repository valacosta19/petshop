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
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;