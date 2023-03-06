import React from "react";
import { Colors, View } from "react-native-ui-lib";
import { useLanguageContext } from "../../../context/LanguageContext";
import { useThemeContext } from "../../../context/ThemeContext";
import CustomTouchable from "../CustomTouchable";
import Icon from "../Icon";
import * as s from "./styles";

const LanguageToggleButton = ({ navigation }) => {
  const { handleToggleLanguageModal } = useLanguageContext();
  const { theme } = useThemeContext();
  return (
    <s.Container>
      <CustomTouchable onPress={handleToggleLanguageModal}>
        <Icon name="globe-outline" size={25} color={theme.colors.textPrimary} />
      </CustomTouchable>
    </s.Container>
  );
};

export default LanguageToggleButton;
