import { useState, useEffect, useReducer, createContext, useContext } from "react";
import axios from "axios";
import { productReducer } from "../reducers/product-reducer";



const productContext = createContext();

const ProductProvider = ({ children }) => { 

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const productResponse = await axios.get("/api/products");
      console.log(productResponse.data.products);
      if (productResponse.status === 200) {
       
        setProducts(productResponse.data.products)
      }
    })();
  }, []);
  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { useProduct, ProductProvider };
