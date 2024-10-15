import React, { useState } from "react";
import {Link} from "react-router-dom"
import Login from "./Login";
function Navbar() {
  let [menu, setmenu] = useState(true);
  function menuhandle() {
    setmenu(!menu);
    console.log(menu);
  }

  return (
    <>
      <div className="navbar">
        <h1>MHS Gurukul</h1>

        <div className="navlink">
        <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/course"}>Course</Link>
          <Link to={"/page"}>Page</Link>
          <Link to={"/quiz"}>Quiz</Link>

          <Link to={"/contact"}>Contact</Link>
        </div>

        <div className="menu">
          <button><Link to={"/login"}>Login</Link></button>
          <button><Link to={"/Singup"}>Singup</Link></button>

          {menu == true ? (
            <span
              class="material-symbols-outlined  menubar"
              onClick={menuhandle}
            >
              menu
            </span>
          ) : (
            <span class="material-symbols-outlined" onClick={menuhandle}>
              close
            </span>
          )}
        </div>
      </div>
    
        <div className= {menu?"menulinksrespons":" menulinksresponsive"}>
        <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/course"}>Course</Link>
            <Link to={"/page"}>Page</Link>
            <Link to={"/quiz"}>Quiz</Link>

            <Link to={"contact"}>Contact</Link>
        </div>
        
       
        
      
    
    </>
  );
}

export default Navbar;
