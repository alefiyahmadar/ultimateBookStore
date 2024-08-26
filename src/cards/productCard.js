import { useContext, React } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../contextProvider";

export const ProductCard = (item) => {
  const { _id, title, author, price, image, rating, isAddedToCart, isWished } =
    item;

  const { AddToCartBtn, RemoveCartBtn, AddToWishlistBtn, RemoveWishBtn } =
    useContext(AppContext);

  const navigate = useNavigate();

  const getUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div key={_id} className="product-card">
      <span className="heartSpan">
        <button
          onClick={
            isWished ? () => RemoveWishBtn(item) : () => AddToWishlistBtn(item)
          }
          className="heart-button"
          style={{
            opacity: JSON.parse(localStorage.getItem("user")).wishlist.find(
              (e) => e.title === title
            )
              ? "1"
              : "0.4",
          }}
        ></button>
      </span>

      <img className="product-img" src={image} alt=""></img>

      <h3 className="item-title">{title} </h3>
      <p className="rating">
        {rating}
        <span role="img" aria-label="">
          ⭐
        </span>
      </p>
      <h4 className="item-author">{author}</h4>
      <p className="item-price">
        ₹{price - 50}
        <span style={{ color: "grey", textDecoration: "line-through" }}>
          ₹{price}
        </span>
      </p>

      <button
        className="Cartbtn"
        onClick={
          isAddedToCart ? () => RemoveCartBtn(item) : () => AddToCartBtn(item)
        }
      >
        {isAddedToCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </div>
  );
};
