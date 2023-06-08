import { styled } from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;

export const ProductsContainer = styled.div `

    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    padding: 20px;      
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    
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
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
    /* align-items: center;
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  } */
`