import { useContext } from "react";
import { AppContext } from "../contextProvider";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { category, setCategory, filters, setFilter } = useContext(AppContext);
  const navigate = useNavigate();
  const GetCategory = (categoryName) => {
    console.log(categoryName);
    setFilter({
      ...filters,
      categoryValue: [...filters.categoryValue, categoryName],
    });
    navigate("/product");
  };
  return (
    <div>
      {category.map(({ categoryName, description, _id }) => (
        <div
          className="homePgContainer"
          id={_id}
          style={{ display: "inline-block", padding: "1rem" }}
        >
          <h3 onClick={() => GetCategory(categoryName)}>{categoryName}</h3>
        </div>
      ))}

      <button onClick={() => navigate("/Product")}>Store</button>
    </div>
  );
};
