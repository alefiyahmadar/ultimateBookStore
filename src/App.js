import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePg";
import { PoductListPg } from "./pages/ProdList";
import { SignUpPg } from "./pages/SignUp";
import { LoginPage } from "./pages/LoginPg";
import { PoductDetail } from "./pages/productDetailPg";
import { useContext } from "react";
import { AppContext } from "./contextProvider";

export default function App() {
  const { isSidebarOpen, setIsSidebarOpen, toggleSidebar, RemoveCartBtn } =
    useContext(AppContext);

  const userCart = JSON.parse(localStorage.getItem("user")).cart;
  const userWishList = JSON.parse(localStorage.getItem("user")).wishlist;

  return (
    <div className="App">
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      <nav className="nav">
        <h3>BookStore</h3>
        <span>
          <img
            className="cart-button"
            onClick={toggleSidebar}
            width="40"
            height="40"
            src="https://img.icons8.com/pastel-glyph/64/5fa052/shopping-cart--v2.png"
            alt="shopping-cart--v2"
          />
          <p className="cartLength">{userCart.length}</p>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/5fa052/external-wishlist-black-friday-5-sbts2018-outline-sbts2018.png"
            alt="external-wishlist-black-friday-5-sbts2018-outline-sbts2018"
          />
          <p className="wishLength">{userWishList.length}</p>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/pastel-glyph/40/5fa052/user-male-circle.png"
            alt="user-male-circle"
          />
        </span>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div>
          <p>cart</p>
          <button className="close-button" onClick={toggleSidebar}>
            X
          </button>

          <hr />
          <span>
            <p>Buy 3 & Get Extra 10% Off!</p>
            <p>Buy 5 & Get Extra 15% Off!</p>
            <p>Buy 10 or more & Get Extra 25% Off!</p>
          </span>
          <hr />
          <div>
            {JSON.parse(localStorage.getItem("user")).cart.map((item) => (
              <div id={item._id} className="CartContainer">
                <div className="imgDiv">
                  <img src={item.image}></img>
                </div>
                <div className="detailDiv">
                  <p className="barTitle">{item.title}</p>
                  <img
                    onClick={() => RemoveCartBtn(item)}
                    className="dustbin"
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios/50/delete--v1.png"
                    alt="delete--v1"
                  />
                  <p>{item.price}</p>
                  <div className="Qtspan">
                    <button>+</button>
                    <p>0</p>
                    <button>-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Product" element={<PoductListPg />}></Route>
        <Route path="/signup" element={<SignUpPg />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/individual/:prodId" element={<PoductDetail />}></Route>
      </Routes>
    </div>
  );
}
