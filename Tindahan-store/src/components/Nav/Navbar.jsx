import { StyledNav } from "./Navbar.styled";
import { Container } from "../Styled/Container.styled";
import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <StyledNav>
                <Nav>
                  <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Contact</NavLink>
                    </li>
                  </ul>
                </Nav>
        </StyledNav>
    )
}