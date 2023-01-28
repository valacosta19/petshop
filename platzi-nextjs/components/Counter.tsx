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

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Container>
      <Button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        -
      </Button>
      <Text>{counter}</Text>
      <Button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </Button>
    </Container>
  );
};

export default Counter;
