import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { ShoppingCart } from "iconsax-react";

export const Nav = styled.nav`
  background-color: #f3edda;
  padding: 15px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0;
`;

const Navbar = () => {
  return (
    <Nav>
      <Flex>
        <Link
          href="/"
          style={{ display: "flex", columnGap: "10px", alignItems: "center" }}
        >
          <Image alt="logo" src="/logo.jpg" width={50} height={50} />
          <Title>My Petite Pet Shop</Title>
        </Link>
        <Link href="/cart">
          <ShoppingCart size="44" color="#8EA604" />
        </Link>
      </Flex>
    </Nav>
  );
};

export default Navbar;
