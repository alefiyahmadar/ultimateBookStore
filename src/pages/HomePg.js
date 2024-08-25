import { useContext } from "react";
import { AppContext } from "../contextProvider";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { category, setCategory, setFilter, filters } = useContext(AppContext);
  const navigate = useNavigate();
  const CategoryHandler = (cat) => {
    setFilter({ ...filters, categoryValue: [...filters.categoryValue, cat] });
    navigate("/product");
  };
  return (
    <div>
      {category.map(({ categoryName, description, _id, image }) => (
        <div
          className="categoryContiner"
          id={_id}
          style={{ display: "inline-block", padding: "1rem" }}
        >
          <img onClick={() => CategoryHandler(categoryName)} src={image}></img>
          <p>{categoryName}</p>
        </div>
      ))}

      <button onClick={() => navigate("/Product")}>Store</button>
    </div>
  );
};
