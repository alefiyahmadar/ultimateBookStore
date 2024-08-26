import { useContext, useState } from "react";
import { AppContext } from "../contextProvider";
import { ProductCard } from "../cards/productCard";

export const PoductListPg = () => {
  const {
    GetCategoryHandler,
    RangeHandler,
    rangeValue,
    SortHandler,
    GetSortData,
    filters,
  } = useContext(AppContext);

  return (
    <div>
      <div className="filterBar">
        <ul>
          <p>filter</p>
          <p>Category</p>
          <li>
            <input
              type="checkbox"
              value="fiction"
              onChange={GetCategoryHandler}
              checked={filters.categoryValue.includes("fiction")}
            />
            <label>fiction</label>
          </li>
          <li>
            <input
              type="checkbox"
              value="nonfiction"
              onChange={GetCategoryHandler}
              checked={filters.categoryValue.includes("nonfiction")}
            />
            <label>nonfiction</label>
          </li>
          <li>
            <input
              type="checkbox"
              value="horror"
              onChange={GetCategoryHandler}
              checked={filters.categoryValue.includes("horror")}
            />
            <label>horror</label>
          </li>
          <p>Rating</p>
          <li>
            <h4 className="rangeV">Rating: {rangeValue}</h4>
            <input
              type="range"
              min="0"
              max="5"
              onChange={RangeHandler}
              value={rangeValue}
              className="custom-range-slider"
            />
          </li>
          <p>Price</p>
          <li>
            <input
              name="sort"
              type="radio"
              onChange={SortHandler}
              value={"LowToHigh"}
            />
            <label>Low-High</label>
          </li>
          <li>
            <input
              name="sort"
              type="radio"
              onChange={SortHandler}
              value={"HighToLow"}
            />
            <label>High-Low</label>
          </li>
        </ul>
      </div>

      <div className="productGrid">
        {GetSortData.map((item) => (
          <ProductCard {...item} />
        ))}
      </div>
    </div>
  );
};
