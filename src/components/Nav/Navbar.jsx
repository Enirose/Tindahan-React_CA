import { StyledNav } from "./Navbar.styled";
import { NavLink, Link } from "react-router-dom";
import {BsCart4} from "react-icons/bs";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { Container } from "../Styled/Container.styled";

export default function Navbar () {

  const { totalItems } = useContext(ShoppingCartContext)

    return (
      <Container>
        <StyledNav>
          <Link to='/'>
            <img src='/logoorange.png' alt="Logo" />
          </Link> 
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Cart">
            <BsCart4 size="28" />
            <span>{totalItems}</span>
          </NavLink>     
        </StyledNav>
      </Container>
    )
}