import {DodamTheme} from "@b1nd/dds-web";
import { type Interpolation } from "styled-components";

export interface StaticIconProps {
  size?: number;
}

export interface IconProps extends StaticIconProps {
  color?: keyof DodamTheme | string;
  $svgStyle?: Interpolation<object>;
  $pathStyle?: Interpolation<object>;
}


