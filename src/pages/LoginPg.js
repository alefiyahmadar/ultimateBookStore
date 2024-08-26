import { NavLink, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="loginContainer">
      <div>
        <span>
          <h3>Login</h3>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>Login</button>
          <button className="guestBtn">Login as guest</button>
          <p>
            Dont have an account?{" "}
            <NavLink onClick={() => navigate("/signup")}>SignUp</NavLink>
          </p>
        </span>
      </div>
    </div>
  );
};
