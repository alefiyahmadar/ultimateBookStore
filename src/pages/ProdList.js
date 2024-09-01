import { useContext, useState } from "react";
import { AppContext } from "../contextProvider";
import { ProductCard } from "../cards/productCard";

export const PoductListPg = () => {
  const {
    GetCategoryHandler,
    RangeHandler,
    rangeValue,
    setRange,
    SortHandler,
    GetSortData,
    filters,
    setFilter,
    isSidebarOpen,
    toggleSidebar,
    selectedOption,
    setSelectedOption,
    isSideBarFilter,
    setIsSideBarFilter
  } = useContext(AppContext);

  const getClearBtn =()=>{

    setFilter({categoryValue:[] ,rating:"" ,sort:""})
    setRange(0)
    setSelectedOption('')
  }

  return (
    <div>
      <div className={`filterBar slideFilter  ${isSideBarFilter ? 'open' : ''}`} >
        <ul>
          <p>Filter</p>
          <button style={{display : window.innerWidth > 430 ? "none" :"flex"}} className="Filterclose-button" onClick={toggleSidebar}>X</button> 
          
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
              checked={selectedOption === "LowToHigh"}
            />
            <label>Low-High</label>
          </li>
          <li>
            <input
              name="sort"
              type="radio"
              onChange={SortHandler}
              value={"HighToLow"}
              checked={selectedOption === "HighToLow"}
            />
            <label>High-Low</label>
          </li>
          <li><button onClick={getClearBtn}  className="clear-btn" >Clear</button></li>
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
