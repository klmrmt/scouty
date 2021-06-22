import React, { Component, useEffect, useState  } from 'react';
import Login from './Login.js';

const Navbar = () => {
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    if(clicked){
      setClicked(0);
    }  else {
      setClicked(1);
    }
    console.log(clicked)
  }
  
  return (
    <div class="topnav">
      {/* {user ? <button onClick={handleLogout}>logout</button> : <div>login</div>} */}

      <button onClick={handleClick}>logout</button>
      {clicked ? <div></div>: <Login />}
         
      <a onClick={handleClick} href="#">Signup</a>
    </div>
  );
}

export default Navbar;