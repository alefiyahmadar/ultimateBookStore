import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePg";
import { PoductListPg } from "./pages/ProdList";
import { SignUpPg } from "./pages/SignUp";
import { LoginPage } from "./pages/LoginPg";
import { PoductDetail } from "./pages/productDetailPg";

export default function App() {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="App">
      <nav className="nav">
        <p>BookStore</p>
        <span>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/pastel-glyph/64/5fa052/shopping-cart--v2.png"
            alt="shopping-cart--v2"
          />
          <p>{currentUser.cart.length}</p>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/5fa052/external-wishlist-black-friday-5-sbts2018-outline-sbts2018.png"
            alt="external-wishlist-black-friday-5-sbts2018-outline-sbts2018"
          />
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/pastel-glyph/40/5fa052/user-male-circle.png"
            alt="user-male-circle"
          />
        </span>
      </nav>

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
