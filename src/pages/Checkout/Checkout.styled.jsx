import { styled } from "styled-components";

export const CheckoutContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
    height: 100vh;
`

export const StyledCheckout = styled.div `
    background-color: #fff;
    align-items: center;
    padding: 50px;
    margin: 30px;

    h2 {
        font-size: 2rem;


        @media (max-width: 480px) {
        font-size: medium;
        }

    }

    /* h5 {
        text-align: center;
    } */

    button {
        margin-top: 10px;
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }
    
    div {
        text-align: center;
    }

    @media (max-width: 480px) {
       padding: 50px;
       margin: 5px;
    }

    @media (min-width: 700px) {
       padding: 200px;
    }
`