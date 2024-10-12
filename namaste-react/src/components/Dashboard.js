import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/auth/dashboard', {
          headers: { Authorization: token },
        });
        setUserData(res.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {userData ? <h1>Welcome, {userData.username}!</h1> : <h1>Loading...</h1>}
    </div>
  );
};

export default Dashboard;
