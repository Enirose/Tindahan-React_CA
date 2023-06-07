import { styled } from "styled-components";

export const ContactForm = styled.form `
    border: 2px solid#030303;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 20rem;
    margin-top: auto;
    margin-bottom: 20rem;

    input {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    p {
        color: red;
        margin-bottom: 10px;
    }
    textarea {
       width: auto;
       padding: 20px;
    }

    button {
        padding: 8px 12px;
        margin: auto;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }

    @media (max-width: 450px) {
        margin: 0;
        padding: 10px;
        margin-bottom: 20rem;

    }

    @media (max-width: 768px) {
        margin: 20px;
        padding: 10px;
        margin-bottom: 20rem;

    }

    @media (min-width: 1200px) {
        margin: 2rem auto;
        max-width: 600px;
        margin-bottom: 20rem;

    }
`