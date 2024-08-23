import { useContext, React } from "react";

import { useNavigate } from "react-router-dom";

export const ProductCard = (item) => {
  const { _id, title, author, price, image, rating } = item;

  const navigate = useNavigate();

  return (
    <div key={_id} className="product-card">
      <span className="heartSpan">
        <button className="heart-button"></button>
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

      <button className="Cartbtn">Add To Cart</button>
    </div>
  );
};
