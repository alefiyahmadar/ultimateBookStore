import { useContext, React } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../contextProvider";

export const ProductCard = (item) => {
  const { _id, title, author, price, image, rating, isAddedToCart, isWished } =
    item;

  const { AddToCartBtn, RemoveCartBtn, AddToWishlistBtn, RemoveWishBtn } =
    useContext(AppContext);

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div key={_id} className="product-card">
      <span className="heartSpan">
        <button
          className="heart-button"
          onClick={
            JSON.parse(localStorage.getItem("user")).wishlist.find(
              (e) => e.title === title
            )
              ? () => RemoveWishBtn(item)
              : () => AddToWishlistBtn(item)
          }
          style={{
            opacity: JSON.parse(localStorage.getItem("user")).wishlist.find(
              (e) => e.title === title
            )
              ? "1"
              : "0.4",
          }}
        ></button>
      </span>

      <img
        onClick={() => navigate(`/individual/${_id}`)}
        className="product-img"
        src={image}
        alt=""
      ></img>

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
          JSON.parse(localStorage.getItem("user")).cart.find(
            (e) => e.title === title
          )
            ? () => RemoveCartBtn(item)
            : () => AddToCartBtn(item)
        }
      >
        {JSON.parse(localStorage.getItem("user")).cart.find(
          (e) => e.title === title
        )
          ? "Remove From Cart"
          : "Add To Cart"}
      </button>
    </div>
  );
};
