import { createContext, Dispatch, SetStateAction, useState } from "react";

export const Product_data = createContext<{
  productsInCart: TProduct[];
  setProductsInCart: Dispatch<SetStateAction<TProduct[]>>;
}>({
  productsInCart: null,
  setProductsInCart: () => {},
});

export const Price_data = createContext<{
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}>({
  price: 0,
  setPrice: () => {},
});

export const Modal_data = createContext<{
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}>({
  openModal: false,
  setOpenModal: () => {},
});

const Context = ({ children }) => {
  const [price, setPrice] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);

  return (
    <Product_data.Provider value={{ productsInCart, setProductsInCart }}>
      <Price_data.Provider value={{ price, setPrice }}>
        <Modal_data.Provider value={{ openModal, setOpenModal }}>
          {children}
        </Modal_data.Provider>
      </Price_data.Provider>
    </Product_data.Provider>
  );
};

export default Context;
