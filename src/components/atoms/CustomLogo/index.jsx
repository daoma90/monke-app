import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import Logo from "../../../../assets/logo.svg";
import { useThemeContext } from "../../../context/ThemeContext";
import { LogoText } from "../typography";
import * as s from "./styles";

const CustomLogo = () => {
  const { theme } = useThemeContext();
  const { t } = useTranslation("translation");

  return (
    <View>
      <Logo width={200} height={40} />
      <s.TextContainer>
        <LogoText color={theme.colors.textPrimary}>{t("utils.logo")}</LogoText>
      </s.TextContainer>
    </View>
  );
};

export default CustomLogo;
