import { StyledNav } from "./Navbar.styled";
import { NavLink } from "react-router-dom";
import {BsCart4} from "react-icons/bs";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

export default function Navbar () {

  const { totalItems } = useContext(ShoppingCartContext)

    return (
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Cart">
            <BsCart4 size="28" />
            <span>{totalItems}</span>
          </NavLink>     
        </StyledNav>
    )
}