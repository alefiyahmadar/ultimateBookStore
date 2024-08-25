import { createContext, useState } from "react";
import { categories } from "./backend/categories";
import { products } from "./backend/product";
import { getAllJSDocTags } from "typescript";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [category, setCategory] = useState(categories);
  const [product, setProduct] = useState(products);
  const [filters, setFilter] = useState({
    categoryValue: [],
    rating: "",
    sort: "",
  });
  const [rangeValue, setRange] = useState(0);

  const GetCategoryHandler = (event) => {
    const IsSimilar = filters.categoryValue.find(
      (e) => e === event.target.value
    );

    setFilter({
      ...filters,
      categoryValue: IsSimilar
        ? filters.categoryValue.filter((e) => e !== event.target.value)
        : [...filters.categoryValue, event.target.value],
    });
  };

  const GetCategoryData =
    filters.categoryValue.length > 0
      ? product.filter((item) => filters.categoryValue.some((cat) => item[cat]))
      : product;

  const RangeHandler = (event) => {
    console.log(event.target.value);
    setRange(event.target.value);
    setFilter({ ...filters, rating: event.target.value });
  };

  const GetRatingData =
    filters.rating > 0
      ? GetCategoryData.filter((e) => e.rating >= Number(filters.rating))
      : GetCategoryData;

  const SortHandler = (event) => {
    setFilter({ ...filters, sort: event.target.value });
  };

  const GetSortData = filters.sort
    ? GetRatingData.sort((a, b) =>
        filters.sort === "LowToHigh" ? a.price - b.price : b.price - a.price
      )
    : GetRatingData;

  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
        product,
        setProduct,
        filters,
        setFilter,
        GetCategoryHandler,
        GetCategoryData,
        RangeHandler,
        rangeValue,
        GetRatingData,
        SortHandler,
        GetSortData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
