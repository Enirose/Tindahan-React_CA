import { styled } from "styled-components";
// import { BsCart4 } from 'react-icons';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding:  40px 0;

`

export const CartLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
    font-weight: 700;
  }

  span {
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;

    span {
      display: none;
    }
  }
`;