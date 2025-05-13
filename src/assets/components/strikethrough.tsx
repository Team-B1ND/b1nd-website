import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const StrikeThrough = ({ size = 18, $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle}
      fill="none"
    >
     
        <StyledPath 
          fill-rule="evenodd"  
          clip-rule="evenodd"
          d="M4.05686 3V5.05524H7.42925V8.21105H2V9.90829H7.42925V15H9.6927V9.90829H16V8.21105H9.6927V5.05524H13.0651V3H4.05686Z"
          $pathStyle={$pathStyle}
        />
     
    </StyledSvg>
  );
};
