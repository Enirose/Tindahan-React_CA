import { styled } from "styled-components";

// export const CartContainer = styled.div `
//     margin: 0 auto;
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     gap: 2rem;
//     align-items: center;
//     padding: 20px;      
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
// `

export const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  height: 100vh;

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const CartStyledCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: medium;
  height: 100px;
  margin-bottom: 5px;
  padding: 15px;
  justify-content: space-evenly;

  img {
    width: 100%;
    height: 90px;
    object-fit: cover;
  }

  h2 {
    margin-bottom: 5px;
    font-size: 16px;
    text-align: center;

    @media (max-width: 700px) {
        font-size: 10px;
    }
  }

  h4 {
    margin-bottom: 5px;
    font-size: 10px;
    @media (min-width: 450px) {
        font-size: 13px;
    }
  }

  div {
    font-size: 14px;
  }

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  @media (min-width: 750px) {
    padding: 15px;
    }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  margin: 0 5px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  font-size: 16px;
`;

export const TotalCheckoutContainer = styled.div`
   flex-basis: 100%;
   text-align: center;
   justify-content: center;

  @media (min-width: 450px) {
    flex-basis: auto;

    
  }
`;


export const TotalPrice = styled.h3`
  margin: 20px 60px;
  font-size: 20px;
  text-align: center;
  background-color: #fff;
  padding: 10px;
`;

export const CheckoutButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  align-items: center;
`;
