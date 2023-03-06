import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import HorizontalPadding from "../../atoms/HorizontalPadding";
import * as s from "./styles";

const SplitScreen = ({ topComponent, bottomComponent }) => {
  const { theme } = useThemeContext();
  return (
    <s.Container color={theme.colors.secondaryBackground}>
      <s.TopContainer>
        <HorizontalPadding>{topComponent}</HorizontalPadding>
      </s.TopContainer>
      <s.BottomContainer color={theme.colors.background}>{bottomComponent}</s.BottomContainer>
    </s.Container>
  );
};

export default SplitScreen;
