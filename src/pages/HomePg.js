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
   
    </div>
  );
};
