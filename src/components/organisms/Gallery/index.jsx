import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../../context/ThemeContext";
import MainButton from "../../atoms/Buttons/MainButton";
import SecondaryButton from "../../atoms/Buttons/SecondaryButton";
import { HeaderLarge } from "../../atoms/typography";
import * as s from "./styles";

const Gallery = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const navigation = useNavigation();
  return (
    <s.Container>
      <HeaderLarge color={theme.colors.textPrimary}>{t("breadText.construction")}</HeaderLarge>
      <s.GIFContainer>
        <s.StyledGIF
          src="https://media.giphy.com/media/9Rp27Gpwjx1n2/giphy.gif"
          resizeMode="contain"
        />
      </s.GIFContainer>
      <SecondaryButton
        label="GTFO!"
        color={theme.colors.secondaryAccent}
        onPress={() => navigation.goBack()}
      />
    </s.Container>
  );
};

export default Gallery;
