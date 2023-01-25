import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 2rem;
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

const ProductList = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Flex>
      {productList.map(({ id, image, name, price }) => {
        return (
          <Link key={id} href={`/product/${id}`}>
            <Card>
              <Image src={image} alt={name} width={300} height={300} />
              <TextContainer>
                <h2>{name}</h2>
                <p>{price}</p>
              </TextContainer>
            </Card>
          </Link>
        );
      })}
    </Flex>
  );
};

export default ProductList;
