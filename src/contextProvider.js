import { createContext, useState } from "react";
import { categories } from "./backend/categories";
import { products } from "./backend/product";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [category, setCategory] = useState(categories);
  const [product, setProduct] = useState(products);

  return (
    <AppContext.Provider value={{ category, setCategory, product, setProduct }}>
      {children}
    </AppContext.Provider>
  );
};
