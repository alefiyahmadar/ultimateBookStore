import { NavLink, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="loginContainer">
      <div>
        <span>
          <h3>BookStore</h3>
          <h4>Login</h4>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button className="LoginBtn">Login</button>
          <button className="guestBtn">Login as guest</button>
          <p>
            Dont have an account? <NavLink to={"/signup"}>SignUp</NavLink>
          </p>
        </span>
      </div>
    </div>
  );
};
