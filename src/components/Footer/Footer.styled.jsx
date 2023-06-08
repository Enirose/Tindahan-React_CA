import { styled } from "styled-components";

export const StyledFooter = styled.footer`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.footer};
    padding: 5px;
    bottom: 0;
    margin-top: auto;
    
    p {
        color: #fd7f32;
        opacity: 5px;
    }
    
`