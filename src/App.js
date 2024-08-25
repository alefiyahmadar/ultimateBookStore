import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePg";
import { PoductListPg } from "./pages/ProdList";
import { SignUpPg } from "./pages/SignUp";

export default function App() {
  return (
    <div className="App">
      <nav className="nav">
        <p>BookStore</p>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Product" element={<PoductListPg />}></Route>
        <Route path="/signup" element={<SignUpPg />}></Route>
      </Routes>
    </div>
  );
}
