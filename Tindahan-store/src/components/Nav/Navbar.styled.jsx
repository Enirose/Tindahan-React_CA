import { styled } from "styled-components";
export const StyledNav = styled.nav`
    /* background-color: beige; */
      display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid yellow;

    a {
        text-decoration: none;
        color: #000000;
        font-size: 1.2rem;
        transition: 0.2s;
    }

    a.active {
        font-weight: bold;
    }

    & a:hover {
        background-color: #fff;
        color: #2b3452;
    }
`