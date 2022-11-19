import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  function toggleSideBar() {
    setToggle(!toggle);
  }

  // close sidebar on click outside
  document.body.onclick = function(e) {
    console.log(e.clientX);
    if (e.clientX > window.innerWidth * 0.8) {
      setToggle(false);
    }
  };

  return (
    <header>
      <FaBars onClick={toggleSideBar} className="bar" />
     
      <nav className={toggle ? "sidebar" : ""}>
        <ul>
          <Link to="/" onClick={toggleSideBar}>
            <li>Home</li>
          </Link>
          <Link to="/tools" onClick={toggleSideBar}>
            <li>Tools</li>
          </Link>
          <Link to="/service" onClick={toggleSideBar}>
            <li>Service</li>
          </Link>
          <Link to="/about" onClick={toggleSideBar}>
            <li>About</li>
          </Link>
          <li>   <div>
        <input style={{marginLeft:"10px",marginTop:"20px",height:'35px'}}type="search" placeholder="site-search" name="q"/>
       <button style={{width:"110px",height:"35px"}}>Search</button>


       </div></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
