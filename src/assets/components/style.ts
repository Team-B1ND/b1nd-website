import styled, { type Interpolation } from "styled-components";
export const StyledSvg = styled.svg<{ $svgStyle: Interpolation<object> }>`
  ${({ $svgStyle }) => $svgStyle}
`;

export const StyledPath = styled.path<{ $pathStyle: Interpolation<object> }>`
  fill: ${({ theme }) => theme.labelNormal };
  ${({ $pathStyle }) => $pathStyle}
`;
