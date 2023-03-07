import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import ConstructionTape from "../ConstructionTape";
import CustomTouchable from "../CustomTouchable";
import { HeaderMedium } from "../typography";
import * as s from "./styles";

const NavigationItem = ({ title, image, link, size, construction }) => {
  const { theme } = useThemeContext();
  const navigation = useNavigation();
  return (
    <CustomTouchable onPress={() => navigation.navigate(link)}>
      <s.Container height={size.height} width={size.width}>
        <s.BackgroundImage source={image} />
        <HeaderMedium color={theme.colors.textPrimary}>{title}</HeaderMedium>
        {construction && (
          <>
            <s.ConstructionContainer rotate="rotate(58deg)">
              <ConstructionTape />
            </s.ConstructionContainer>
            <s.ConstructionContainer rotate="rotate(123deg)">
              <ConstructionTape />
            </s.ConstructionContainer>
          </>
        )}
      </s.Container>
    </CustomTouchable>
  );
};

export default NavigationItem;
