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
      <div className="homeImgContainer">
        <img src="https://plus.unsplash.com/premium_photo-1669323925724-bb87080d122d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N0b3JlJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"></img>
      </div>
      {category.map(({ categoryName, description, _id, image }) => (
        <div
          className="homePgContainer"
          id={_id}
          style={{ display: "inline-block", padding: "1rem" }}
        >
          <img style={{}} src={image}></img>
          <h3 onClick={() => GetCategory(categoryName)}>{categoryName}</h3>
        </div>
      ))}

      <button onClick={() => navigate("/Product")}>Store</button>
    </div>
  );
};
