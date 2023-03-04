import React, { useContext, useState } from "react";
import { GetStaticProps } from "next";
import fetch from "isomorphic-fetch";
import Image from "next/image";
import styled from "styled-components";
import Counter from "@components/Counter";
import { Modal_data, Price_data, Product_data } from "context/Context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  column-gap: 10px;
  max-width: 950px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Price = styled.p`
  font-size: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 8px 20px;
  background-color: var(--color-green);
  border-style: none;
  text-transform: uppercase;
  font-weight: bold;
  width: 60%;
  cursor: pointer;

  :hover {
    background-color: var(--color-blue);
    transition: all 0.5s;
  }
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
  const { setProductsInCart } = useContext(Product_data);
  const { setPrice } = useContext(Price_data);
  const { setOpenModal } = useContext(Modal_data);
  const [productPrice, setProductPrice] = useState(0);

  const AddProduct = () => {
    setProductPrice((prevPrice) => prevPrice + product.price);
  };

  const RemoveProduct = () => {
    setProductPrice((prevPrice) => prevPrice - product.price);
  };

  const handleAddToCart = () => {
    setProductsInCart((prevProduct) => [...prevProduct, product]);
    setPrice(productPrice);
    setOpenModal(true);
  };

  return (
    //el id es por el mismo nombre del archivo
    <Container>
      <ImageContainer>
        <Image src={product?.image} alt={product?.name} fill />
      </ImageContainer>
      <Content>
        <h2>{product?.name}</h2>
        <p>{product.attributes.description}</p>
        <Price>${product?.price}</Price>

        <ButtonsContainer>
          <Counter AddProduct={AddProduct} RemoveProduct={RemoveProduct} />
          <AddToCart onClick={handleAddToCart}>Add to cart</AddToCart>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default ProductItem;
