import React, { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  border: 1px solid var(--color-secondary);
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: var(--color-secondary);
  border-style: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

const Text = styled.p`
  margin: 0;
  padding: 0px 15px;
`;

const Counter = ({
  AddProduct,
  RemoveProduct,
}: {
  AddProduct: () => void;
  RemoveProduct: () => void;
}) => {
  const [counter, setCounter] = useState(0);

  const ProductAddition = () => {
    setCounter((prevCounter) => prevCounter + 1);
    AddProduct();
  };

  const ProductSubstraction = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
      RemoveProduct();
    }
  };

  return (
    <Container>
      <Button onClick={ProductSubstraction}>-</Button>
      <Text>{counter}</Text>
      <Button onClick={ProductAddition}>+</Button>
    </Container>
  );
};

export default Counter;
