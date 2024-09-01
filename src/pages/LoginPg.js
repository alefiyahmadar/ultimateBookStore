import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../contextProvider";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {isLoggedIn , setIsLoggedIn} = useContext(AppContext)
  const [getEmail , setEmail] = useState("")
  const [getPassword , setPassword] = useState("")


const GuestHandler =()=>{
setIsLoggedIn(true)
navigate("/")

}
const LoginHandler =()=>{

  const GetUser = JSON.parse(localStorage.getItem("usersArray")).map((user)=>{

      if(user.email === getEmail && user.password === getPassword){
        console.log(user)
        localStorage.setItem("user" , JSON.stringify(user))
        setIsLoggedIn(true)
        navigate("/")
      }else{


      }


  })
}

  return (
    <div className="loginContainer">
      <div>
        <span>
          <h3>BookStore</h3>
          <h4>Login</h4>
          <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          <button className="LoginBtn" onClick={LoginHandler}>Login</button>
          <button className="guestBtn" onClick={GuestHandler}>Login as guest</button>
          <p>
            Dont have an account? <NavLink to={"/signup"}>SignUp</NavLink>
          </p>
        </span>
      </div>
    </div>
  );
};
