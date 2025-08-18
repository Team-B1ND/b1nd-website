import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const IntroductionBox = styled.main`
    display: flex;
    flex-direction: column;
    gap: 144px;
    margin-bottom: 144px;
    @media (max-width: 767px) {
        gap: 108px;
    }
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    h1{
        font-size: 60px !important;
        ${DodamTypography.Title1.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
    span{
        ${DodamTypography.Heading1.Medium};
        color: ${({theme})=>theme.labelAssistive};
    }
    @media (max-width: 767px) {
        gap: 10px;
        h1{
            font-size: 36px !important;
            ${DodamTypography.Title1.Bold};
        }
    }
`

export const Headline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    p{
        ${DodamTypography.Title2.Medium};
        color: ${({theme})=>theme.primaryNormal};
    }
    
`
export const HeadlineContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1{
        font-size: 40px !important;
        ${DodamTypography.Title1.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
    span{
        ${DodamTypography.Heading2.Medium};
        color: ${({theme})=>theme.labelAssistive};
    }
`
export const HeadlineFlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
`

export const HistoryBox = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
p{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px !important;
    ${DodamTypography.Title1.Bold};
    color: ${({theme})=>theme.labelNormal};

}

`
export const HeaderDate = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 120px;
    ${DodamTypography.Heading1.Bold};
    color: ${({theme})=>theme.labelNormal};
    span{
        width: 10px;
        height: 10px;
        background-color: ${({theme})=>theme.primaryNormal};
        border-radius: 100%;
    }
    @media (max-width: 767px) {
        width: 100%; 

    }
`

export const HistoryItemBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 5px;
    gap: 36px;
   
    @media (max-width: 767px) {
        gap: 8px;
    }
`

export const HistoryText = styled.div`
    display: flex;
    width: 100%;
    height: min-content;
    gap: 8px;
    ${DodamTypography.Headline.Medium};
    span:nth-child(1){
        color: ${({theme})=>theme.labelAssistive};
    }
    span:nth-child(2){
        color: ${({theme})=>theme.labelNormal};
    }
    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const MemberBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const MemberTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 4px;
    font-size: 40px !important;
    ${DodamTypography.Title1.Bold};
    color: ${({ theme }) => theme.labelNormal};
`

export const GenerationContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid ${({ theme }) => theme.borderNormal};
`

export const GenerationHeader = styled.button<{ $open: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.labelNormal};
    span{
        ${DodamTypography.Title2.Medium};
    }
    svg{
        transition: transform .2s ease;
        transform: rotate(${({ $open }) => ($open ? "0deg" : "180deg")});
        color: ${({ theme }) => theme.labelAssistive};
    }
`

export const GenerationContent = styled.div<{ $open: boolean }>`
    overflow: hidden;
    max-height: ${({ $open }) => ($open ? "1000px" : "0px")};
    transition: max-height .3s ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const MemberRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr auto;
    align-items: center;
    padding: 12px 0;
    border-top: 1px solid ${({ theme }) => theme.borderNormal};
    @media (max-width: 767px) {
        grid-template-columns: 1fr; 
        gap: 8px;
    }
`

// 멤버 테이블
export const MemberTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;

    th{
        height: 56px;
        padding: 12px 0;
        vertical-align: middle;
        ${DodamTypography.Headline.Bold};
        color: ${({ theme }) => theme.labelNormal};
    }

    td {
        padding: 12px 0;
        vertical-align: middle;
        ${DodamTypography.Headline.Medium}; 
        color: ${({ theme }) => theme.labelNormal};
    }

    /* 열 너비 설정 */
    tr > :nth-child(1) { width: 30%; }
    tr > :nth-child(2) { width: 50%; }
    tr > :nth-child(3) { width: 20%; }

    .right { text-align: right; }

    /* 기수 헤더 행 */
    .generation-row { cursor: pointer; }
    .generation-row th { font-weight: 700;  }
    .generation-row .arrow { display: inline-flex; transition: transform .2s ease; }
    .generation-row[data-open="true"] .arrow { transform: rotate(180deg); }

    /* 일반 멤버 행 */
    tbody tr:not(.generation-row) th:nth-child(1) { font-weight: 700; display:flex; }
    tbody tr:not(.generation-row) th:nth-child(2) { font-weight: 500; color: ${({ theme }) => theme.labelAssistive}; }

    /* 링크 영역 */
    .trc-icondefault { display: inline-flex; gap: 12px; }
    .trc-icondefault a {
     cursor: pointer;
    }
    
    .trc-name { font-weight: 700; color: ${({ theme }) => theme.labelNormal}; display: flex; align-items: center; justify-content:center;  gap: 4px; }
    .trc-string { font-weight: 500; color: ${({ theme }) => theme.labelAssistive}; }

    @media (max-width: 767px) {
        tr > :nth-child(1), tr > :nth-child(2), tr > :nth-child(3) { width: auto; }
    }
`