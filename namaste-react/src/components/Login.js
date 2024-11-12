import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [formData , setFormData] = useState({
    username:'',
    password:'',
  });

  const handleOnChange = (e) =>{
    setFormData({...formData , [e.target.name]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', formData);
      alert(res.data.message);
      localStorage.setItem('token', res.data.token); 
    } catch (error) {
      console.error('Error logging in', error);
      alert("error")
    }
    console.log(formData);
  }
  return (

    <div className=" d-flex h-auto w-1/4 p-10 m-auto border relative top-20 rounded bg-slate-100 shadow-2xl " >
      <h2 className="font-bold text-3xl  from-neutral-900" > Login </h2>
      <form onSubmit={handleSubmit} className="justify-items-center space-y-6">
        <div>
          <label className="text-sm">User Name</label>
          <input type="text"  name="username" onChange={handleOnChange } className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="User Name" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input type="password"  name="password" onChange={handleOnChange } className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="********" />
        </div>
        <button className="bg-green-500 rounded ml-24 p-2 my-6 w-44 ">Login</button>
        </form>
        <p className="w-full mx-40 font-bold my-4 text-slate-900 "><Link to="/register">Register</Link></p>
    </div>
  )
}
export default Login;