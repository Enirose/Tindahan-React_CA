import { styled } from "styled-components";

// export const ReviewsContainer = styled.div `
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     background-color: #f9f9f9;
//     padding: 20px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     margin: 20px 0;
//     height: 100%;
// `
export const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;

  h3 {
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    /* grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); */
    padding: 20px ;
    font-size: medium;
  }
`;
