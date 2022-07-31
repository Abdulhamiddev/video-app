import React from 'react'
import { IoAdd, IoLogOut, IoMoon, IoSearch } from "react-icons/io5";
import './Navbar.css'

const Navbar = () => {
	return (
    <div className="navbar">
      <div className="navbarItems">
        <h1>LOGO</h1>
        <div className="navbarInput">
          <input type={"text"} placeholder="Search" />
          <IoSearch className="SearchIcon" />
        </div>
        <div className="navbarLinks">
          <IoMoon className="moonIcon" />
          <IoAdd className="addIcon" />
          <IoLogOut className="logOutIcon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar