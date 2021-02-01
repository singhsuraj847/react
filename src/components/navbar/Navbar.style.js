import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  position: fixed;
  background: ${({ scroll }) => (scroll ? "#000" : "#000")};
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  width: 100%;
  opacity: 0.8;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-family: 'Lobster', cursive;
  font-size: 1.2rem;
`;
export const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    color: #fff;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;
export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavMenuLink = styled(Link)`
  ${NavLink}
  display: flex;
  align-items: center;
  height: 20px;
  transition: 2s ease-in-out;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
