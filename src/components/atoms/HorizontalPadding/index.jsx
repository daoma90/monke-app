import React from "react";
import styled from "styled-components/native";

const HorizontalPadding = ({ children }) => {
  return <Padding>{children}</Padding>;
};

export default HorizontalPadding;

const Padding = styled.View`
  padding-horizontal: 20px;
  display: flex;
`;
