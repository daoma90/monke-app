import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import * as s from "./styles";

const ScreenContainer = ({ children }) => {
  const { theme } = useThemeContext();
  return <s.Container bg={theme.colors.background}>{children}</s.Container>;
};

export default ScreenContainer;
