import React from "react";
import fetch from "isomorphic-fetch";
import ProductList from "@components/ProductList";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  /* max-width: 1600px; */
  /* margin: auto; */
  /* padding: 2rem; */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
`;

export const getStaticProps = async (params) => {
  const response = await fetch("https://petshop-psi.vercel.app/api/products");
  //cambiamos el nombre de data a productList
  const { data: productList }: TAPIResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};

//Pagina básica. Index siempre va a ser Home
const Home = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/hero-petshop.jpg"
          alt="owner and dog running in the sand"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageContainer>
      <ProductList productList={productList} />
    </Container>
  );
};

export default Home;
