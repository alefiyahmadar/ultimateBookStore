import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contextProvider";

export const PoductDetail = () => {
  const { prodId } = useParams();

  const {
    product,
    setProduct,
    AddToCartBtn,
    RemoveCartBtn,
    AddToWishlistBtn,
    RemoveWishBtn,
  } = useContext(AppContext);

  const getProduct = product.find((e) => e._id === prodId);
  console.log(getProduct);

  return (
    <div className="ProdDetailContainer">
      <div className="ProdDetailDiv">
        <span>
          <div style={{}}>
            <img src={getProduct.image} alt=""></img>
          </div>
          <div style={{}}>
            <span className="detailBar">
              <h3>{getProduct.title}</h3>
              <h4>{getProduct.author}</h4>
              <h5 className="ratingD">{getProduct.rating}⭐</h5>
              <h5>₹{getProduct.price}</h5>
              <p style={{ display: "flex", color: "gray" }}>
                <span style={{ fontSize: "10px" }} role="img" aria-label="">
                  ⚡
                </span>
                Hurry, Only few left!
              </p>
              <hr />
              <p>
                Author: <span>{getProduct.author}</span>
              </p>
              <p>
                Category:{" "}
                <span>
                  {getProduct.fiction}
                  {getProduct.nonfiction}
                  {getProduct.horror}
                </span>
              </p>
              <p>
                {" "}
                Language: <span>{getProduct.language}</span>
              </p>
              <button
                className="CartbtnDetail"
                onClick={
                  JSON.parse(localStorage.getItem("user")).cart.find(
                    (e) => e.title === getProduct.title
                  )
                    ? () => RemoveCartBtn(getProduct)
                    : () => AddToCartBtn(getProduct)
                }
              >
                {JSON.parse(localStorage.getItem("user")).cart.find(
                  (e) => e.title === getProduct.title
                )
                  ? "Remove From Cart"
                  : "Add To Cart"}
              </button>
              <button
                className="WishbtnDetail"
                onClick={
                  JSON.parse(localStorage.getItem("user")).wishlist.find(
                    (e) => e.title === getProduct.title
                  )
                    ? () => RemoveWishBtn(getProduct)
                    : () => AddToWishlistBtn(getProduct)
                }
              >
                {JSON.parse(localStorage.getItem("user")).wishlist.find(
                  (e) => e.title === getProduct.title
                )
                  ? "Remove From Wishlist"
                  : "Add To Wishlist"}
              </button>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};
