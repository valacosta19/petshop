import React from "react";
import { GetStaticProps } from "next";
import fetch from "isomorphic-fetch";
import Image from "next/image";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  column-gap: 10px;
  max-width: 850px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Price = styled.p`
  font-size: 2rem;
`;

export const getStaticPaths = async () => {
  const response = await fetch("https://petshop-psi.vercel.app/api/products");
  const { data: productList }: TAPIResponse = await response.json();

  const paths = productList.map(({ id }: TProduct) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    //incremental static generation
    //cualquier pagina que no esté en path da 404
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://petshop-psi.vercel.app/api/${params?.id}`
  );
  const product: TProduct = await response.json();

  return {
    props: {
      product,
    },
  };
};

//Páginas dinámicas
const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    //el id es por el mismo nombre del archivo
    <Flex>
      <Image
        src={product?.image}
        alt={product?.name}
        width="400"
        height="400"
      />
      <Content>
        <h2>{product?.name}</h2>
        <p>{product.attributes.description}</p>
        <Price>${product?.price}</Price>
      </Content>
    </Flex>
  );
};

export default ProductItem;
