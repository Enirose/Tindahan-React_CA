import { styled } from "styled-components";

export const ProductContainer = styled.div `
    padding: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    


    @media (max-width: 700px) {
       flex-direction: column;
    }
`