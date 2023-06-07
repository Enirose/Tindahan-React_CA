import { styled } from "styled-components";

export const ContactForm = styled.form `
    border: 3px solid#030303;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 20rem;
    margin-top: auto;

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
`