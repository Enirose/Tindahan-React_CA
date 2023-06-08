import { styled } from "styled-components";

export const StyledCard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    height: 100%;

    .product-button {
      margin-top: 10px;
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

    }

   
    .product-image {
      align-items: center;
    }

    img {
      max-width: 100%;
      height: 18rem;
      object-fit: cover;
    }

    
    h5 {
      margin: 4px 0;
    }
    
    @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
`