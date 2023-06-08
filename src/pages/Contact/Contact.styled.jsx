import { styled } from "styled-components";

export const ContactForm = styled.form `
    border: 2px solid#ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 20rem;
    margin-top: auto;
    margin-bottom: 20rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

    input {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #010000;
        border-radius: 10px;
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
      margin: 0 40px;
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        color: #007bff;
        text-transform: uppercase;
        background-color: #dbdada;
      }

      @media (min-width: 400px) {
        margin:0 100px ;
      }

      @media (min-width: 768px) {
        margin:0 200px ;
      }
    }

    @media (max-width: 450px) {
        margin: 0;
        padding: 10px;
        margin-bottom: 20rem;

    }

    @media (min-width: 768px) {
        margin: 2rem auto;
        max-width: 600px;
        padding: 10px;
        margin-bottom: 20rem;

    }

    @media (min-width: 1200px) {
        margin-bottom: 20rem;

    }
`