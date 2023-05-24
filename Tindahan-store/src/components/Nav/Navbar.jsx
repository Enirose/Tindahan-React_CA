import { StyledNav } from "./Navbar.styled";
import { NavLink } from "react-router-dom";
import {BsCart4} from "react-icons/bs";

export default function Navbar () {
    return (
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Cart">
            <BsCart4 size="28" />
            <span>{}</span>
          </NavLink>     
        </StyledNav>
    )
}