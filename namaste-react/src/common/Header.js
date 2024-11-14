import { useState, useEffect } from "react";
import logo from "../../assets/swiggy_log.webp"
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userIcon } from "../utils/svg";
import axios from "axios";
import { AUTH_URL } from "../utils/constants";
const Header = () => {
  const internetStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
  const token = localStorage.getItem('token');
  const [user, setUser] = useState("");
  const userN = user.userName ;
  const [userName, setUserName] = useState(user.userName);
  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(AUTH_URL+'user', 
          {
          headers: {
            Authorization: token 
          },
        }
      );
        setUser(res.data);
      }catch(error){
        // console.log(error,"err")
      }
    };
    if(token){

      fetchData();
    }
    
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigator('/login');
  };
  // console.log(user,"user" ,userName ,userN)
  const renderAuthButton = () =>{
    if(!token){
      return 
        <button className="login w-10"><Link to="/login">Login</Link></button> 
    
    }else{
      return(<><span className="w-16 flex justify-between">{userIcon}{user.username}</span>
       <button className="login w-10" onClick={handleLogout}>Logout</button> 
       </>) 
    }
  }
  
  return (
    <div className=" flex px-28 justify-between p-4 drop-shadow-lg bg-slate-100">
      <div className="">
        <Link to="/">
          <img
            className="logo  h-20"
            src={logo}
          />
        </Link>
      </div>
      <div className="p-4 m-4 w-2/5">
        <ul className="flex justify-between">
          {/* <li>Online {internetStatus == true ? " on" : " off "}</li> */}
          <li className="hover:scale-125"><Link to="/">Home</Link></li>
          <li className="hover:scale-125"> <Link to="/about">About Us</Link></li>
          <li className="hover:scale-125"><Link to="/contact">Contact Us</Link></li>
          <li className="hover:scale-125"><Link to="/grocery">Grocery</Link></li>
          <li className="hover:scale-125">Cart</li>
          {renderAuthButton()}
        </ul>
      </div>
    </div>
  );
};
export default Header;