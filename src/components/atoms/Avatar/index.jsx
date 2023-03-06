import React from "react";
import * as s from "./styles";

const Avatar = ({ image, size }) => {
  return <s.StyledImage source={image} size={size} />;
};

export default Avatar;
