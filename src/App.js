import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePg";
import { PoductListPg } from "./pages/ProdList";

export default function App() {
  return (
    <div className="App">
      <nav className="nav">
        
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Product" element={<PoductListPg />}></Route>
      </Routes>
    </div>
  );
}
