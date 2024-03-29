import React from 'react';
import { useNavigate } from 'react-router-dom';


const Featuresbar = () => {
  const navigate = useNavigate(); // Move the useNavigate hook inside the component

  const handleLogout = () => {
    const Token = localStorage.getItem('accessToken');
    if (Token) {
      localStorage.removeItem('accessToken');
      navigate("/");
    } else {
      alert('You are already logged out');
    }
  };

  return (
    <div className='fbar'>
      <ul className='ul3'>
        <li><a href="">Notes</a></li>
        <li><a href="/pdff">Material</a></li>
      </ul>
      <ul className='ul4'>
        {/* <li><a href="/profile">Dashboard</a></li> */}
        {localStorage.getItem("accessToken")&&(
          <span>
        <li><a href="" onClick={handleLogout}>Logout</a></li>
        <li><a href="" onClick={handleLogout}>Dashboard</a></li>
        </span>
        )}
      </ul>
    </div>
  );
};

export default Featuresbar;
