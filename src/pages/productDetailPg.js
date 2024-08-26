import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contextProvider";

export const PoductDetail = () => {
  const { prodId } = useParams();

  const { product, setProduct } = useContext(AppContext);

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
              <p>{getProduct.title}</p>
              <p>{getProduct.rating}⭐</p>
              <p>{getProduct.author}</p>
              <p>{getProduct.nonfiction}</p>
              <p>{getProduct.fiction}</p>
              <p>{getProduct.horror}</p>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};
