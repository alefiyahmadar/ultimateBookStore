import { useContext } from "react";
import { AppContext } from "../contextProvider";
import { ProductCard } from "../cards/productCard";

export const PoductListPg = () => {
  const { product, setProduct } = useContext(AppContext);
  return (
    <div className="productGrid">
      {product.map((item) => (
        <ProductCard {...item} />
      ))}
    </div>
  );
};
