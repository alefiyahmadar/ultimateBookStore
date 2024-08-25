import { useContext } from "react";
import { AppContext } from "../contextProvider";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { category, setCategory } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      {category.map(({ categoryName, description, _id }) => (
        <div id={_id} style={{ display: "inline-block", padding: "1rem" }}>
          <h3>{categoryName}</h3>
        </div>
      ))}

      <button onClick={() => navigate("/Product")}>Store</button>
    </div>
  );
};
