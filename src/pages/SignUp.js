import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contextProvider";
import { v4 as uuid } from "uuid";
import { NavLink, useNavigate } from "react-router-dom";

export const SignUpPg = () => {
  const [NewUser, setNewUser] = useState({
    _id: uuid(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cart: [],
    wishlist: [],
  });
  const { usersArray, setUserArray, user, setUser , isLoggedIn , setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const SignUpHandler = () => {
    const UpdatedArr = [...usersArray, NewUser];

    localStorage.setItem("user", JSON.stringify(NewUser));
    setUser(NewUser);

    localStorage.setItem("usersArray", JSON.stringify(UpdatedArr));
    setUserArray(UpdatedArr);
    setIsLoggedIn(true)

    navigate("/");
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("usersArray");
    if (storedUsers) {
      setUserArray(JSON.parse(storedUsers));
    }
  }, [setUserArray]);

  console.log(usersArray);

  return (
    <div className="SignUpContainer">
      <div>
        <span>
          <h3>BookStore</h3>
          <h4>SignUp</h4>
          <input
            placeholder="FirstName"
            onChange={(e) =>
              setNewUser({ ...NewUser, firstName: e.target.value })
            }
          />
          <input
            placeholder="LastName"
            onChange={(e) =>
              setNewUser({ ...NewUser, lastName: e.target.value })
            }
          />
          <input
            placeholder="Email"
            onChange={(e) => setNewUser({ ...NewUser, email: e.target.value })}
          />
          <input
            placeholder="Password"
            onChange={(e) =>
              setNewUser({ ...NewUser, password: e.target.value })
            }
          />
          <button onClick={SignUpHandler}>Sign Up</button>
          <p>
            Already have an account? <NavLink to={"/login"}>Login</NavLink>
          </p>
        </span>
      </div>
    </div>
  );
};
