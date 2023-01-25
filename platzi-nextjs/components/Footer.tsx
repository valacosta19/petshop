import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3edda;
  padding: 20px;
  row-gap: 1.5rem;
`;

const Link = styled.a`
  text-decoration: underline;
  color: #8ea604;
`;

const Footer = () => {
  return (
    <Flex>
      <Image alt="logo" src="/logo.jpg" width={60} height={60} />
      <div>
        Copyright © 2023 | Developed by{" "}
        <Link href="https://www.linkedin.com/in/valentina-acosta-rivas-42b429b3">
          Valentina Acosta
        </Link>{" "}
        |{" "}
        <Link href="https://www.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_18246195.htm#query=pet%20shop%20logo&position=22&from_view=search&track=ais">
          Logo by rawpixel.com
        </Link>{" "}
        on Freepik
      </div>
    </Flex>
  );
};

export default Footer;
