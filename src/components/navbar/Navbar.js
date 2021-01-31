import React, { useEffect, useState } from "react";
import { menuData } from "../../data/MenuData";
import Dropdown from "./Dropdown";
import { Button } from "../Button";
import { FaAngleDown } from "react-icons/fa";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLink,
  NavBtn,
} from "./Navbar.style.js";

const Navbar = ({ toggle }) => {
  const [scroll, setScrollNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1133) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scroll={scroll}>
      <Logo to="/">Bhutani Shop</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        <NavMenuLink to="/">Home</NavMenuLink>

        <NavMenuLink
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={closeMobileMenu}
        >
          Men
          {dropdown && <Dropdown />}
          <FaAngleDown />
        </NavMenuLink>

        <NavMenuLink>Women</NavMenuLink>
        <NavMenuLink>About Us</NavMenuLink>
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
