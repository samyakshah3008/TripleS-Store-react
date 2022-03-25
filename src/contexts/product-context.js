import { useEffect, useReducer, createContext, useContext } from "react";
import axios from "axios";
import { productReducer } from "../reducers/product-reducer";

const initialValue = {
  products: [],
};

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialValue);
  useEffect(() => {
    (async () => {
      const productResponse = await axios.get("/api/products");
      console.log(productResponse.data.products);
      if (productResponse.status === 200) {
        dispatch({
          type: "INITIAL_PRODUCT",
          payload: productResponse.data.products,
        });
      }
    })();
  }, []);
  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { useProduct, ProductProvider };
