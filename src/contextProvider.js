import { createContext, useEffect, useState } from "react";
import { categories } from "./backend/categories";
import { products } from "./backend/product";
import { users } from "./backend/users";
import { v4 as uuid } from "uuid";
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
  const [defaultUser, setDefaultUser] = useState({
    _id: uuid(),
    cart: [],
    email: "adarshbalika@gmail.com",
    firstName: "Adarsh",
    lastName: "Balika",
    password: "adarshbalika",
    wishlist: [],
  });

  const [usersArray, setUserArray] = useState(users);
  const [user, setUser] = useState();

  const [cart, setCart] = useState(
    localStorage.getItem("user") && localStorage.getItem("user").cart
      ? localStorage.getItem("user").cart
      : []
  );
  const [wishList, setWishList] = useState(
    localStorage.getItem("user") && localStorage.getItem("user").wishlist
      ? localStorage.getItem("user").wishlist
      : []
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(defaultUser));
  }, []);

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

  const AddToCartBtn = (item) => {
    setCart([...cart, item]);
    const userData = JSON.parse(localStorage.getItem("user"));
    const userArrData = JSON.parse(localStorage.getItem("usersArray"));

    setProduct((prevItem) =>
      prevItem.map((e) =>
        e._id === item._id ? { ...e, isAddedToCart: true } : e
      )
    );

    const updatedUser = { ...userData, cart: [...cart, item] };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    const updateArr = userArrData.map((e) => {
      if (e.email === userData.email && e.password === userData.password) {
        return { ...e, cart: [...cart, item] };
      } else {
        return e;
      }
    });

    localStorage.setItem("usersArray", JSON.stringify(updateArr));
  };

  const RemoveCartBtn = (item) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userArrData = JSON.parse(localStorage.getItem("usersArray"));

    setProduct((prevItem) =>
      prevItem.map((e) =>
        e._id === item._id ? { ...e, isAddedToCart: false } : e
      )
    );
    const FilterCart = userData.cart.filter((e) => e.title !== item.title);

    const updatedUser = { ...userData, cart: FilterCart };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    const updateArr = userArrData.map((e) => {
      if (e.email === userData.email && e.password === userData.password) {
        return { ...e, cart: FilterCart };
      } else {
        return e;
      }
    });
    localStorage.setItem("usersArray", JSON.stringify(updateArr));
  };

  const AddToWishlistBtn = (item) => {
    setWishList([...wishList, item]);
    const getUser = JSON.parse(localStorage.getItem("user"));
    const getUserArr = JSON.parse(localStorage.getItem("usersArray"));

    setProduct((prevItem) =>
      prevItem.map((e) => (e._id === item._id ? { ...e, isWished: true } : e))
    );

    const updateUser = { ...getUser, wishlist: [...wishList, item] };

    localStorage.setItem("user", JSON.stringify(updateUser));
    const updateArr = getUserArr.map((e) =>
      e.email === getUser.email && e.password === getUser.password
        ? { ...e, wishlist: [...wishList, item] }
        : e
    );
    localStorage.setItem("usersArray", JSON.stringify(updateArr));
  };

  const RemoveWishBtn = (item) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userArrData = JSON.parse(localStorage.getItem("usersArray"));
    setProduct((prevItem) =>
      prevItem.map((e) =>
        e.title === item.title ? { ...e, isWished: false } : e
      )
    );

    const filterWish = userData.wishlist.filter((e) => e.title !== item.title);
    const updatedUser = { ...userData, wishlist: filterWish };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    const updateArr = userArrData.map((e) =>
      e.email === userData.email && e.password === userData.password
        ? { ...e, wishlist: filterWish }
        : e
    );
    localStorage.setItem("usersArray", JSON.stringify(updateArr));
  };

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
        usersArray,
        setUserArray,
        AddToCartBtn,
        RemoveCartBtn,
        AddToWishlistBtn,
        RemoveWishBtn,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
