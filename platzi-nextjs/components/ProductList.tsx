import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 2rem;
  column-gap: 1.5rem;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const TextContainer = styled.div`
  padding: 2px 16px;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
`;

const ProductList = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Flex>
      <h2>Products</h2>
      <Flex>
        {productList.map(({ id, image, name, price }) => {
          return (
            <Link key={id} href={`/product/${id}`}>
              <Card>
                <Image src={image} alt={name} width={400} height={400} />
                <TextContainer>
                  <Title>{name}</Title>
                  <Text>Price: ${price}</Text>
                </TextContainer>
              </Card>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ProductList;
