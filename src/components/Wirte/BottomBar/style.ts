import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const BottomBar = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ExitButton = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    cursor: pointer;
    
    span{
        ${DodamTypography.Heading2.Medium};
        color: ${({theme})=>theme.labelNormal};
    }
`