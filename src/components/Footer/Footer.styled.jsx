import { styled } from "styled-components";

export const StyledFooter = styled.footer`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.footer};
    width: 100%;
    /* margin-top: -0.5em; */
  /* padding: 2em; */
    position: fixed; 
    left: 50%;
    transform:translateX(-50%);
    bottom: 0;
    
`