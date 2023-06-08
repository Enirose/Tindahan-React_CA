
import Navbar from "../Nav/Navbar";
import { Container } from "../Styled/Container.styled";
import { StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";
// import {AiOutlineShoppingCart} from "react-icons/ai";

export default function Header () {
    return (
        <StyledHeader>
            <Container>
                <Navbar />
            </Container>
        </StyledHeader>
    )
}