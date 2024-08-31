import { useContext } from "react";
import { AppContext } from "../contextProvider";
import { NavLink, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { category, setCategory, setFilter, filters } = useContext(AppContext);
  const navigate = useNavigate();
  const CategoryHandler = (cat) => {
    setFilter({ ...filters, categoryValue: [...filters.categoryValue, cat] });
    navigate("/product");
  };
  return (
    <div className="homeContainer">
      <div className="homeMain">
        <div className="image-container">
          <div className="home-bg"></div>
        </div>
      </div>
      <div className="categoryContiner">
        {category.map(({ categoryName, description, _id, image }) => (
          <div id={_id} onClick={() => CategoryHandler(categoryName)}>
            <img src={image}></img>
            <p>{categoryName}</p>
          </div>
        ))}
      </div>
      <footer>
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
};
