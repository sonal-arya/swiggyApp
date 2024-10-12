import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
  })

  const [success, setSuccess] = useState(false);

  const handelOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert(res.data.message);
    } catch (error) {
      console.error('Registration error:', error.response)
    }
    console.log(formData)
  }

  return success ? (<div>
    <h2>successfuly register</h2>
    <Link>Login</Link>
  </div>) : (
    <div className=" d-flex h-auto w-1/4 p-10 m-auto border relative top-28 rounded bg-slate-100 shadow-2xl " >
      <h2 className="font-bold text-3xl  ml-36 from-neutral-900" > Register </h2>

      <form onSubmit={handleSubmit} className="justify-items-center space-y-6">
        <div>
          <label className="text-sm">User Name</label>
          <input type="username" name="username" onChange={handelOnchange} className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="User Name" />
        </div>
        <div>
          <label className="text-sm">Phone number</label>
          <input type="phone" name="phone" onChange={handelOnchange} className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input type="email" name="email" onChange={handelOnchange} className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input type="password" name="password" onChange={handelOnchange} className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="********" />
        </div>
        <button className="bg-green-500 rounded ml-24 p-2 my-6 w-48 " type="submit" >Register</button>
      </form>
      
      <p className="w-full mx-44 font-bold my-4 text-slate-900 "><Link to="/login" >Login</Link></p>
    </div>
  )
}
export default Register;