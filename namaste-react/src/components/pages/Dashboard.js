import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get('http://localhost:5000/api/auth/dashboard', 
          {
          headers: {
            Authorization: token 
          },
        }
      );
        setUser(res.data);
      }catch(error){
        console.log(error,"err")
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
      <h1>heyyy...!</h1>
    </div>
  );
};

export default Dashboard;
