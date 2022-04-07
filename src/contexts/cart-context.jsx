import { createContext, useContext, useState } from "react";

const createCart = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ cart: [] });

  return (
    <createCart.Provider value={{ cart, setCart }}>
      {children}
    </createCart.Provider>
  );
};

export const useCart = () => useContext(createCart);
