import "./styles.css";
import { Route, Routes, useNavigate , NavLink } from "react-router-dom";
import { HomePage } from "./pages/HomePg";
import { PoductListPg } from "./pages/ProdList";
import { SignUpPg } from "./pages/SignUp";
import { LoginPage } from "./pages/LoginPg";
import { PoductDetail } from "./pages/productDetailPg";
import { useContext } from "react";
import { AppContext } from "./contextProvider";
import { UserPage } from "./pages/userPg";

export default function App() {
  const {
    isSidebarOpen,
    toggleSidebarCart,

    toggleSidebarWish,
    isCartOpen,
    RemoveCartBtn,
    RemoveWishBtn,
    AddToCartBtn,
    QtyHandler,
    DecQtyHandler,
    toggleSidebar,
    ToggleFilter,
    isSideBarFilter,
        setIsSideBarFilter,
        useReduce,
        DiscountMessages,
        currentMessageIndex,
        isSliding
    
  } = useContext(AppContext);
  const userCart = JSON.parse(localStorage.getItem("user")).cart;

  const userWishList = JSON.parse(localStorage.getItem("user")).wishlist;
  const navigate = useNavigate();
  return (
    <div className="App">
      {isSidebarOpen && (
        <div className="overlay" onClick={toggleSidebarCart}></div>
      )}
      {isSideBarFilter && <div className="overlay" onClick={toggleSidebar}></div>}

      <nav className="nav">
        <p style={{display:window.innerWidth > 430 ? "none" :"block" , margin:"0"}}>
      <img  onClick={toggleSidebar} style={{ display:window.location.pathname === "/product"  ? "block" :"none",
        marginLeft:"1rem" , paddingTop:"1rem"}} width="25" height="25" src="https://img.icons8.com/ios-filled/25/5fa052/menu--v6.png" alt="menu--v1"/>
        </p>
        
        
        <h3 onClick={() => navigate("/product")}>BookStore</h3>
        <span>
          <img
            className="cart-button"
            onClick={  toggleSidebarCart}
            width={window.innerWidth > 430 ?"40":"30"}
            height={window.innerWidth > 430 ?"40":"30"}
            src="https://img.icons8.com/pastel-glyph/64/5fa052/shopping-cart--v2.png"
            alt="shopping-cart--v2"
          />
          <p className="cartLength">{userCart.length}</p>
          <img
            onClick={toggleSidebarWish}
            width={window.innerWidth > 430 ?"40":"30"}
            height={window.innerWidth > 430 ?"40":"30"}
            src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/5fa052/external-wishlist-black-friday-5-sbts2018-outline-sbts2018.png"
            alt="external-wishlist-black-friday-5-sbts2018-outline-sbts2018"
          />
          <p className="wishLength">{userWishList.length}</p>
          <img
            onClick={() => navigate("/user")}
            width={window.innerWidth > 430 ?"40":"30"}
            height={window.innerWidth > 430 ?"40":"30"}
            src="https://img.icons8.com/pastel-glyph/40/5fa052/user-male-circle.png"
            alt="user-male-circle"
          />
        </span>

        
      </nav>
      <div className="discount-banner" >
      <div className={`discount-text ${isSliding ? 'slide-out' : 'slide-in'}`}>
                {DiscountMessages[currentMessageIndex]}
            </div>
        </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div style={{ display: isCartOpen ? "block" : "none" }}>
          <p>Cart</p>
          <button className="close-button" onClick={toggleSidebarCart}>
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
                  <p>
                    ₹{item.price - 50}{" "}
                    <span
                      style={{ color: "grey", textDecoration: "line-through" }}
                    >
                      ₹{item.price}
                    </span>
                  </p>
                  <div className="Qtspan">
                    <button onClick={() => QtyHandler(item)}>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => DecQtyHandler(item)}>-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkoutCart">
            <p
              style={{
                display:
                  JSON.parse(localStorage.getItem("user")).cart.length > 0
                    ? "none"
                    : "block",
              }}
            >
              Cart is empty!
            </p>
            <p
              style={{
                paddingLeft: "2%",
                marginBottom: "2%",
                paddingTop: "1%",
                display:
                  JSON.parse(localStorage.getItem("user")).cart.length > 0
                    ? "block"
                    : "none",
              }}
            >
              Shipping & taxes calculated at checkout
            </p>
            <button
              style={{
                display:
                  JSON.parse(localStorage.getItem("user")).cart.length > 0
                    ? "block"
                    : "none",
              }}
            >
              Checkout <img width="10" height="10" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/full-stop--v1.png" alt="full-stop--v1"/> ₹{useReduce}
            </button>
          </div>
        </div>
        <div style={{ display: isCartOpen ? "none" : "block" }}>
          <p>Wishlist</p>
          <button className="close-button" onClick={toggleSidebarWish}>
            X
          </button>

          <hr />

          <div>
          <p
              style={{
                display:
                  JSON.parse(localStorage.getItem("user")).wishlist.length > 0
                    ? "none"
                    : "block",
              }}
            >
              Wishlist is empty!
            </p>
            {JSON.parse(localStorage.getItem("user")).wishlist.map((item) => (
              <div id={item._id} className="CartContainer">
                <div className="imgDiv">
                  <img src={item.image}></img>
                </div>
                <div className="detailDiv">
                  <p className="barTitle">{item.title}</p>
                  <img
                    onClick={() => RemoveWishBtn(item)}
                    className="dustbin"
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios/50/delete--v1.png"
                    alt="delete--v1"
                  />
                  <p>
                    ₹{item.price - 50}{" "}
                    <span
                      style={{ color: "grey", textDecoration: "line-through" }}
                    >
                      ₹{item.price}
                    </span>
                  </p>
                  <button
                    className="wishBtnBar"
                    onClick={
                      JSON.parse(localStorage.getItem("user")).cart.find(
                        (e) => e.title === item.title
                      )
                        ? () => RemoveCartBtn(item)
                        : () => AddToCartBtn(item)
                    }
                  >
                    {JSON.parse(localStorage.getItem("user")).cart.find(
                      (e) => e.title === item.title
                    )
                      ? "Remove From Cart"
                      : "Add To Cart"}
                  </button>
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
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>

      <footer style={{display:window.location.pathname === "/product" ? "none" :"flex"}}>
        <ul className="footerUl">
          <div className="about">
            <h3>LiteraryLinx</h3>

            <h4>Books are a uniquely portable magic!</h4>

            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>@2022 LiteraryLinx</p>
          </div>
          <div className="connect">
            <h3>Connect</h3>

            <p ><NavLink style={{textDecoration:"none"}} to={"https://github.com/alefiyahmadar/"}>GitHub</NavLink></p>

            <p ><NavLink style={{textDecoration:"none"}} to={"https://www.linkedin.com/in/alefiyah-madarwala-16b821259/"}>LinkedIn</NavLink></p>
            <p onClick={() => navigate("")}>Twitter</p>
          </div>

          <div className="resources">
            <h3>Resources</h3>

            <p onClick={() => navigate("/signup")}>Sign Up</p>
            <p onClick={() => navigate("/login")}>Log In</p>
          </div>
        </ul>
      </footer>
    </div>
  );
}
