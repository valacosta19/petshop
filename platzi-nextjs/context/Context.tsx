import { createContext, Dispatch, SetStateAction, useState } from "react";
export const Price_data = createContext<{
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}>({
  price: 0,
  setPrice: () => {},
});

const Context = ({ children }) => {
  const [price, setPrice] = useState(0);

  return (
    <Price_data.Provider value={{ price, setPrice }}>
      {children}
    </Price_data.Provider>
  );
};

export default Context;
