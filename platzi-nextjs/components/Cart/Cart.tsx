import { COLORS } from "@styles/globalStyles";
import { Modal_data, Product_data } from "context/Context";
import { CloseSquare } from "iconsax-react";
import React, { useContext } from "react";
import styled from "styled-components";

type ContainerProps = {
  openModal: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Backdrop = styled.div<ContainerProps>`
  display: ${(props) => (props.openModal ? "block" : "none")};
  background-color: ${(props) =>
    props.openModal ? "rgba(0,0,0,0.5)" : "none"};
  position: absolute;
  z-index: 10000;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  height: 100%;
  width: ${(props) => (props.openModal ? "100%" : "0px")};
  max-width: 100%;
  background-color: var(--color-white);
  transition: all 2s ease;

  @media (min-width: 768px) {
    width: ${(props) => (props.openModal ? "50%" : "0px")};
    max-width: 400px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--color-darkblue);
`;

const Title = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 20px;
  cursor: pointer;
  width: fit-content;
`;

export const Cart = () => {
  const { productsInCart, setProductsInCart } = useContext(Product_data);
  const { openModal, setOpenModal } = useContext(Modal_data);
  return (
    <Backdrop openModal={openModal}>
      <Container openModal={openModal}>
        <Header>
          <Title>Cart</Title>
          <Button onClick={() => setOpenModal(false)}>
            <CloseSquare size="32" color={COLORS.green} />
          </Button>
        </Header>
        {productsInCart &&
          productsInCart.map((product) => <li>{product.name}</li>)}
      </Container>
    </Backdrop>
  );
};
