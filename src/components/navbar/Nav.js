import React, { useState } from "react";
// import { menuData } from "../../data/MenuData";
import { Button } from "../Button";
import "./Navbar.style.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { FaStream, FaTimes, FaAngleDown } from "react-icons/fa";

function Nav() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    console.log("hello");
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Bhutani Shop
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaStream />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-click" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/men" className="nav-click" onClick={closeMobileMenu}>
              men
              <FaAngleDown />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/women" className="nav-click" onClick={closeMobileMenu}>
              women
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Button>Contact Us</Button>
      </nav>
    </>
  );
}

export default Nav;
