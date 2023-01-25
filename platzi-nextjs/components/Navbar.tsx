import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #f3edda;
  padding: 10px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Nav>
      <Flex>
        <Link href="/">
          <Image alt="logo" src="/logo.jpg" width={100} height={100} />
        </Link>
        <Link href="/about">About</Link>
      </Flex>
    </Nav>
  );
};

export default Navbar;
