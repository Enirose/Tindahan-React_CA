import { styled } from "styled-components";
export const StyledNav = styled.nav`
    /* background-color: beige; */
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    align-items: center;


    a {
        text-decoration: none;
        color: #fd7f32;
        font-size: 1.2rem;
        transition: 0.2s;
    }

    a.active {
        font-weight: bold;
    }

    /* & a:hover {
        background-color: #fd7f32;
        color: #2b3452;
    } */

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    a {
      margin-top: 10px;
      margin-left: 0;
    }
  }
  
`
