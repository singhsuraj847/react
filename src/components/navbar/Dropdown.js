import React, { useState } from "react";
import { menuData } from "../../data/MenuData";
import { Button } from "../Button";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {menuData.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                className={item.cName}
                to={item.link}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
