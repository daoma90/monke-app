import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const ConstructionTape = (props) => (
  <Svg width={503} height={23} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#a)" filter="url(#b)">
      <Path fill="#000" d="M4 0h495v15H4z" />
      <Path
        d="M12.36 0H23l-7.6 15H4l8.36-15ZM31.36 0H42l-7.6 15H23l8.36-15ZM50.36 0H61l-7.6 15H42l8.36-15ZM69.36 0H80l-7.6 15H61l8.36-15ZM88.36 0H99l-7.6 15H80l8.36-15ZM107.36 0H118l-7.6 15H99l8.36-15ZM126.36 0H137l-7.6 15H118l8.36-15ZM145.36 0H156l-7.6 15H137l8.36-15ZM164.36 0H175l-7.6 15H156l8.36-15ZM183.36 0H194l-7.6 15H175l8.36-15ZM202.36 0H213l-7.6 15H194l8.36-15ZM221.36 0H232l-7.6 15H213l8.36-15ZM240.36 0H251l-7.6 15H232l8.36-15ZM259.36 0H270l-7.6 15H251l8.36-15ZM278.36 0H289l-7.6 15H270l8.36-15ZM297.36 0H308l-7.6 15H289l8.36-15ZM316.36 0H327l-7.6 15H308l8.36-15ZM335.36 0H346l-7.6 15H327l8.36-15ZM354.36 0H365l-7.6 15H346l8.36-15ZM373.36 0H384l-7.6 15H365l8.36-15ZM392.36 0H403l-7.6 15H384l8.36-15ZM411.36 0H422l-7.6 15H403l8.36-15ZM430.36 0H441l-7.6 15H422l8.36-15ZM449.36 0H460l-7.6 15H441l8.36-15ZM468.36 0H479l-7.6 15H460l8.36-15ZM487.36 0H498l-7.6 15H479l8.36-15Z"
        fill="#FCC330"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(4)" d="M0 0h495v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ConstructionTape;
