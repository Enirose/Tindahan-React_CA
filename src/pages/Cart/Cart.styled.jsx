import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  max-width: 100%;
    padding: 0 20px;
    margin: 0;
    /* height: 100vh; */

    h1 {
        text-align: center;
    }

    .cartEmpty {
    padding: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 15px;
    text-align: center;
    background-color: #FFF;
    margin-bottom: 100vh;

    @media (min-width: 400px) {
      padding: 40px;
    }

    @media (min-width: 700px) {
      padding: 80px;
      
    }

    @media (min-width: 1000px) {
      padding: 100px;
    }
  }
`

export const CartContainer = styled.div`
  margin: 80px;

  @media (max-width: 480px) {
    margin: 20px;
  }
`;

export const CartStyledCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  text-align: center;
  background-color: #FFF;
  justify-content: space-evenly;

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const QuantityButton = styled.button`
  padding: 5px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  font-size: 16px;
  margin: 0 10px;
`;

// export const TotalCheckoutContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 20px 0;
//   background-color:  #fff;
//   padding: 20px;
//   gap: 10px;
// `;
export const TotalCheckoutContainer = styled.div`
   /* flex-basis: 100%;
   text-align: center;
   background-color: #fff;
   padding: 20px; */
     display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  background-color: #FFF;
  

  @media (min-width: 450px) {
    flex-basis: auto;

    
  }
`;

export const TotalPrice = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CheckoutButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 10px;
`;