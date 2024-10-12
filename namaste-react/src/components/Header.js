import { useState } from "react";
import logo from "../../assets/swiggy_log.webp"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const internetStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
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
          <li>Online {internetStatus == true ? " on" : " off "}</li>
          <li className="hover:scale-125"><Link to="/">Home</Link></li>
          <li className="hover:scale-125"> <Link to="/about">About Us</Link></li>
          <li className="hover:scale-125"><Link to="/contact">Contact Us</Link></li>
          <li className="hover:scale-125"><Link to="/grocery">Grocery</Link></li>
          <li className="hover:scale-125">Cart</li>
          <button className="login w-10"> <Link to="/login">Login</Link></button>
        </ul>
      </div>
    </div>
  );
};
export default Header;