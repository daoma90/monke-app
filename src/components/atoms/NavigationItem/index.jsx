import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import CustomTouchable from "../CustomTouchable";
import { HeaderMedium } from "../typography";
import * as s from "./styles";

const NavigationItem = ({ title, image, link, size, id }) => {
  const { theme } = useThemeContext();
  const navigation = useNavigation();
  return (
    <CustomTouchable onPress={() => navigation.navigate(link)}>
      <s.Container height={size.height} width={size.width}>
        <s.BackgroundImage source={image} />
        <HeaderMedium color={theme.colors.textPrimary}>{title}</HeaderMedium>
      </s.Container>
    </CustomTouchable>
  );
};

export default NavigationItem;
