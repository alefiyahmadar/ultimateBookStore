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
  const [isCartOpen, setCartOpen] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [getId, setId] = useState(0);
  const [AdressArr, setAdressArr] = useState([
    {
      id: 0,
      firstname: "Adarsh",
      lastname: "Balika",
      house: "301, Luxera Apt",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: "2012203",
      number: "9726349227",
    },
  ]);

  const toggleSidebarCart = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setCartOpen(true);
  };
  const toggleSidebarWish = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setCartOpen(false);
  };

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userArrayStored = JSON.parse(localStorage.getItem("usersArray"));

  storedUser
    ? localStorage.setItem("user", JSON.stringify(storedUser))
    : localStorage.setItem("user", JSON.stringify(defaultUser));

  userArrayStored
    ? localStorage.setItem("usersArray", JSON.stringify(userArrayStored))
    : localStorage.setItem("usersArray", JSON.stringify(usersArray));

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
    const newItm = { ...item, isAddedToCart: true };

    const userData = JSON.parse(localStorage.getItem("user"));
    const userArrData = JSON.parse(localStorage.getItem("usersArray"));

    setProduct((prevItem) =>
      prevItem.map((e) =>
        e._id === item._id ? { ...e, isAddedToCart: true } : e
      )
    );

    const updatedUser = {
      ...userData,
      cart: [...userData.cart, newItm],
      isAddedToCart: true,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    const updateArr = userArrData.map((e) => {
      if (e.email === userData.email && e.password === userData.password) {
        return { ...e, cart: [...userData.cart, newItm], isAddedToCart: true };
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

    const updatedUser = { ...userData, cart: FilterCart, isAddedToCart: false };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    const updateArr = userArrData.map((e) => {
      if (e.email === userData.email && e.password === userData.password) {
        return { ...e, cart: FilterCart, isAddedToCart: false };
      } else {
        return e;
      }
    });
    localStorage.setItem("usersArray", JSON.stringify(updateArr));
  };

  const AddToWishlistBtn = (item) => {
    const newItm = { ...item, isWished: true };

    const getUser = JSON.parse(localStorage.getItem("user"));
    const getUserArr = JSON.parse(localStorage.getItem("usersArray"));

    setProduct((prevItem) =>
      prevItem.map((e) => (e._id === item._id ? { ...e, isWished: true } : e))
    );

    const updateUser = {
      ...getUser,
      wishlist: [...getUser.wishlist, newItm],
      isWished: true,
    };

    localStorage.setItem("user", JSON.stringify(updateUser));
    const updateArr = getUserArr.map((e) =>
      e.email === getUser.email && e.password === getUser.password
        ? { ...e, wishlist: [...e.wishlist, newItm], isWished: true }
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
    const updatedUser = { ...userData, wishlist: filterWish, isWished: false };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    const updateArr = userArrData.map((e) =>
      e.email === userData.email && e.password === userData.password
        ? { ...e, wishlist: filterWish, isWished: false }
        : e
    );
    localStorage.setItem("usersArray", JSON.stringify(updateArr));
  };
  const QtyHandler = (item) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userArrData = JSON.parse(localStorage.getItem("usersArray"));

    setProduct((prevItem) =>
      prevItem.map((e) =>
        e.title === item.title ? { ...e, quantity: e.quantity + 1 } : e
      )
    );

    const updatedUser = {
      ...userData,
      cart: userData.cart.map((e) =>
        e.title === item.title ? { ...e, quantity: e.quantity + 1 } : e
      ),
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    const updateArr = userArrData.map((e) => {
      if (e.email === userData.email && e.password === userData.password) {
        return {
          ...e,
          cart: e.cart.map((u) =>
            u.title === item.title ? { ...u, quantity: u.quantity + 1 } : u
          ),
        };
      }
    });
    console.log(updateArr);
    localStorage.setItem("usersArray", JSON.stringify(updateArr));
  };

  const DecQtyHandler = (item) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userArrData = JSON.parse(localStorage.getItem("usersArray"));

    setProduct((prevItem) =>
      prevItem.map((e) =>
        e.title === item.title ? { ...e, quantity: e.quantity - 1 } : e
      )
    );

    const updatedUser = {
      ...userData,
      cart: userData.cart.map((e) =>
        e.title === item.title ? { ...e, quantity: e.quantity - 1 } : e
      ),
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    const updateArr = userArrData.map((e) => {
      if (e.email === userData.email && e.password === userData.password) {
        return {
          ...e,
          cart: e.cart.map((u) =>
            u.title === item.title ? { ...u, quantity: u.quantity - 1 } : u
          ),
        };
      }
    });
    console.log(updateArr);
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
        isSidebarOpen,
        setIsSidebarOpen,
        toggleSidebarCart,
        isCartOpen,
        toggleSidebarWish,
        QtyHandler,
        AdressArr,
        setAdressArr,
        getId,
        setId,
        DecQtyHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
