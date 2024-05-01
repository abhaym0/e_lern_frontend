import React from 'react';
import { useNavigate } from 'react-router-dom';


const Featuresbar = () => {
  const navigate = useNavigate();
  const profile = ()=> {
    navigate('/profile');
  }

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
          <>
        <li><a href="" onClick={profile}>Dashboard</a></li>
        <li><a href="" onClick={handleLogout}>Logout</a></li>
        </>
        )}
      </ul>
    </div>
  );
};

export default Featuresbar;
