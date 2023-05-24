import { Container } from "../Styled/Container.styled";
import { StyledHeader } from "./Header.styled";

export default function Header () {
    return (
        <StyledHeader>
            <Container>
                <img src='public/logoGreen.png' alt="Logo" />
            </Container>
        </StyledHeader>
    )
}