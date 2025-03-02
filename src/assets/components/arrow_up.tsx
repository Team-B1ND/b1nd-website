import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const ArrowUp = ({ size = 34, $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size + 1}
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle}
    >
      <mask  
      id="mask0_5_844" 
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse" 
      x="0" 
      y="0" 
      width="34" 
      height="35"
    >

        <StyledPath
          d="M15.1143 34.4706L33.9705 15.6144L18.8855 0.529435L0.0293327 19.3856L15.1143 34.4706Z"
          color={"white"}
          $pathStyle={$pathStyle}
        />
      </mask>

      <g mask="url(#mask0_5_844)">
        <StyledPath 
          d="M26.4433 8.08723C26.1495 7.79345 25.7358 7.63739 25.3009 7.64684L12.445 7.70167C11.9908 7.70949 11.6239 7.85591 11.3485 8.13135C10.742 8.73782 10.7239 9.61703 11.3097 10.2029C11.6113 10.5045 12.0047 10.6512 12.3809 10.6402L16.7779 10.6521L23.7336 10.3135L23.4602 9.34364L19.8761 12.5319L7.96788 24.4401C7.32503 25.083 7.32295 25.955 7.94926 26.5813C8.57561 27.2076 9.44762 27.2056 10.0905 26.5627L21.9987 14.6545L25.1869 11.0703L24.2073 10.7872L23.8784 17.7527L23.8921 22.1514C23.8908 22.5373 24.0279 22.9211 24.3294 23.2226C24.9153 23.8085 25.7945 23.7903 26.401 23.1839C26.6764 22.9084 26.8308 22.5495 26.8307 22.0553L26.8837 9.22968C26.8932 8.79474 26.7371 8.38105 26.4433 8.08723Z"
          $pathStyle={$pathStyle}
        />
      </g>
    </StyledSvg>
  );
};
