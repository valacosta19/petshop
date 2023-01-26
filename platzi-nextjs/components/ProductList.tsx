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
  margin: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  min-width: 300px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 16px;
`;

export const Subtitle = styled.h3`
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1rem;
`;

const ProductList = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Flex>
      <Title>Products</Title>
      <Flex>
        {productList.map(({ id, image, name, price }) => {
          return (
            <Link key={id} href={`/product/${id}`}>
              <Card>
                <Image
                  src={image}
                  alt={name}
                  width={250}
                  height={250}
                  style={{ padding: "10px", margin: "auto" }}
                />
                <hr />
                <TextContainer>
                  <Subtitle>{name}</Subtitle>
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
